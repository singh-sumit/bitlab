from motor.motor_asyncio import AsyncIOMotorClient


async def connect_to_mongodb(host: str, username: str, password: str, db_name: str):
    client = AsyncIOMotorClient(host=host, username=username, password=password, authSource=db_name)

    return client