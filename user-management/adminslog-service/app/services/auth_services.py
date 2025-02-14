from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models import Admin

async def authenticate_admin(email: str, password: str, db: AsyncSession):

    query = select(Admin).where(Admin.email == email)
    result = await db.execute(query)
    admin = result.scalars().first()

    if admin and admin.password == password:  # Compara la contraseña sin encriptar
        return admin
    return None
