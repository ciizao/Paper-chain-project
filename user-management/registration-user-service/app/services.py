from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models import User
from bcrypt import hashpw, gensalt

async def get_user_by_email(db: AsyncSession, email: str):
    #Retrieve a user by email
    result = await db.execute(select(User).filter(User.email == email))
    return result.scalars().first()

async def create_user(db: AsyncSession, name: str, email: str, password: str):
    #Create a new user
    hashed_password = hashpw(password.encode("utf-8"), gensalt()).decode("utf-8")
    user = User(name=name, email=email, password=hashed_password)
    db.add(user)
    await db.commit()
    await db.refresh(user)
    return user



