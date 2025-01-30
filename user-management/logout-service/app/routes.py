from fastapi import APIRouter, HTTPException, Depends, Header
from app.auth import invalidate_token, is_token_valid
from app.db import get_db
from sqlalchemy.ext.asyncio import AsyncSession

router = APIRouter()

@router.post("/logout", summary="Invalidate a JWT token", tags=["Logout"])
async def logout(authorization: str = Header(...), db: AsyncSession = Depends(get_db)):

    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=400, detail="Invalid Authorization header format")
    
    token = authorization.split(" ")[1]

    if not await is_token_valid(token):
        raise HTTPException(status_code=400, detail="Invalid or expired token")

    await invalidate_token(token, db)
    return {"message": "Logout successful"}

