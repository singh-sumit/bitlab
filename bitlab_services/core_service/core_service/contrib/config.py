from functools import lru_cache

from pydantic.v1 import BaseModel

from load_env import env


class Settings(BaseModel):
    app_name: str = env['project']['name']
    API_V1_STR: str = "/api/v1"

    # DB
    mongo_host: str = env['db']['host']
    mongo_port: str = env['db']['port']
    mongo_user: str = env['db']['username']
    mongo_pass: str = env['db']['password']
    mongo_db: str = env['db']['name']

    @property
    def mongo_dsn(self):
        return f"mongodb://{self.mongo_user}:{self.mongo_pass}@{self.mongo_host}:{self.mongo_port}/{self.mongo_db}"


@lru_cache
def get_settings():
    return Settings()
