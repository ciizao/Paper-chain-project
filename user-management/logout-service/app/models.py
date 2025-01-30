from sqlalchemy import Column, Integer, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class InvalidatedToken(Base):
    __tablename__ = "invalidated_tokens"

    id = Column(Integer, primary_key=True, index=True)
    token = Column(Text, nullable=False)
    expiration_time = Column(DateTime, nullable=False)
