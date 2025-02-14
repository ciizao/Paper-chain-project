from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, String, Integer, TIMESTAMP, func

Base = declarative_base()

class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(150), unique=True, nullable=False, index=True)
    password = Column(String, nullable=False)  # SIN ENCRIPTAR
    cargo = Column(String(50), nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.now())
