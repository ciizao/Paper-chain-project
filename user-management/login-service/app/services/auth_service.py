from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models import User
from app.utils.security import verify_password

async def authenticate_user(email: str, password: str, db: AsyncSession):
    """
    Validate the user's email and password.
    """
    query = select(User).where(User.email == email)
    result = await db.execute(query)
    user = result.scalars().first()

    # Match the 'password' column
    if user and verify_password(password, user.password):
        return user
    return None


