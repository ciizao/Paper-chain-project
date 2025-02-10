from datetime import datetime
from jose import jwt, JWTError
from app.models import InvalidatedToken
from sqlalchemy.ext.asyncio import AsyncSession
from app.config import settings
from sqlalchemy.future import select

async def is_token_valid(token: str, db: AsyncSession) -> bool:
    """Check if a JWT token is valid and not revoked."""
    try:
        payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
        expiration = payload.get("exp")

        # Ensure the token has not expired
        if expiration and datetime.utcfromtimestamp(expiration) < datetime.utcnow():
            return False

        # Check if token is already invalidated
        result = await db.execute(select(InvalidatedToken).where(InvalidatedToken.token == token))
        if result.scalars().first():
            return False  # Token was revoked

        return True
    except JWTError:
        return False

async def invalidate_token(token: str, db: AsyncSession):
    """Store an invalidated token in the database, avoiding duplicates."""
    payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
    expiration_time = datetime.utcfromtimestamp(payload.get("exp"))

    # Check if the token is already invalidated
    result = await db.execute(select(InvalidatedToken).where(InvalidatedToken.token == token))
    existing_token = result.scalars().first()

    if existing_token:
        return

    invalidated_token = InvalidatedToken(token=token, expiration_time=expiration_time)
    db.add(invalidated_token)
    await db.commit()
