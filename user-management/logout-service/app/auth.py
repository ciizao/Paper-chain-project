from datetime import datetime
from jose import jwt, JWTError
from app.models import InvalidatedToken
from sqlalchemy.ext.asyncio import AsyncSession
from app.config import settings

async def is_token_valid(token: str) -> bool:
    """Check if a JWT token is valid."""
    try:
        # Decode the token
        payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
        expiration = payload.get("exp")

        # Ensure the token has not expired
        if expiration and datetime.utcfromtimestamp(expiration) < datetime.utcnow():
            return False
        return True
    except JWTError:
        return False

async def invalidate_token(token: str, db: AsyncSession):
    """Store an invalidated token in the database."""
    # Decode the token to get the expiration time
    payload = jwt.decode(token, settings.jwt_secret, algorithms=[settings.jwt_algorithm])
    expiration_time = datetime.utcfromtimestamp(payload.get("exp"))

    # Add the token to the database
    invalidated_token = InvalidatedToken(token=token, expiration_time=expiration_time)
    db.add(invalidated_token)
    await db.commit()
