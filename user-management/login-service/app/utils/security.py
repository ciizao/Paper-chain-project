import uuid  # Asegúrate de importar uuid
from passlib.context import CryptContext
from jose import jwt
from datetime import datetime, timedelta
from app.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str) -> bool:

    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict) -> str:

    to_encode = {
        key: (str(value) if isinstance(value, uuid.UUID) else value)
        for key, value in data.items()
    }
    expire = datetime.utcnow() + timedelta(minutes=settings.jwt_expiration_minutes)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, settings.jwt_secret, algorithm=settings.jwt_algorithm)


