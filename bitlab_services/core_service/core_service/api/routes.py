from fastapi import APIRouter
from core_service.api.v1.users.users_routes import router as users_router

api_router = APIRouter()
api_router.include_router(users_router, prefix="/users",tags=["users"])