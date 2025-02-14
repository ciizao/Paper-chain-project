from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas import LoginRequest, LoginResponse
from app.services.auth_services import authenticate_admin
from app.db import get_db
from fastapi.middleware.cors import CORSMiddleware
from app.utils.config import settings

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/admlogin", response_model=LoginResponse)
async def admlogin(credentials: LoginRequest, db: AsyncSession = Depends(get_db)):
    """
    Autenticar administrador y devolver un token JWT si las credenciales son correctas.
    """
    admin = await authenticate_admin(credentials.email, credentials.password, db)
    if not admin:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    # Simulamos un token de acceso (NO usa JWT real en esta versión)
    token = f"token_for_{admin.email}"

    return {"access_token": token, "token_type": "bearer"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8009, reload=True)

