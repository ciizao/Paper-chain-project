from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from app import models, db, services
from app.db import engine, get_db

# create table
async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(models.Base.metadata.create_all)

app = FastAPI()

@app.on_event("startup")
async def startup():
    await create_tables()

# application form
class UserCreate(BaseModel):
    name: str
    email: str
    password: str

@app.post("/register")
async def register_user(
    user: UserCreate, db: AsyncSession = Depends(get_db)
):
    existing_user = await services.get_user_by_email(db, user.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    new_user = await services.create_user(db, user.name, user.email, user.password)
    return {"message": "User registered successfully", "user_id": new_user.id}





