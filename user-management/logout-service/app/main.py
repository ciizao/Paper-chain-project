from fastapi import FastAPI
from app.routes import router

app = FastAPI(
    title="Logout Service",
    description="Service for invalidating JWT tokens during user logout",
    version="1.0.0"
)

app.include_router(router)
