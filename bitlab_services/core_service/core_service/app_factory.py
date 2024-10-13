from contextlib import asynccontextmanager

from beanie import init_beanie
from fastapi import FastAPI

from core_service.api.routes import api_router
from core_service.contrib.config import get_settings
from service_common.database.documents.user import User
from service_common.database.mongodb.connection import connect_to_mongodb


@asynccontextmanager
async def lifespan(app: FastAPI):
    settings = get_settings()
    db_client = await connect_to_mongodb(settings.mongo_host, settings.mongo_user, settings.mongo_pass,
                                         settings.mongo_db)
    # INIT BEANIE
    await init_beanie(database=db_client[settings.mongo_db], document_models=[User])

    # Include API Router
    app.include_router(api_router, prefix=settings.API_V1_STR)

    # Add logger
    app
    print("Startup complete")
    yield
    print("Shutdown complete")


def create_app():
    settings = get_settings()
    app = FastAPI(title=settings.app_name, lifespan=lifespan, openapi_url=f'{settings.API_V1_STR}/openapi.json',
                  docs_url=f'{settings.API_V1_STR}/docs', redoc_url=f'{settings.API_V1_STR}/redoc')

    return app
