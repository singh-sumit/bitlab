from functools import lru_cache
from os import environ

from envyaml import EnvYAML

from core_service.constants import BASE_DIR

AVAILABLE_PROFILES = ['local', 'stage']


@lru_cache
def load_env():
    profile = environ.get("PROFILE", "local")
    if profile not in AVAILABLE_PROFILES:
        raise ValueError(f'Profile - {profile} must be either of {AVAILABLE_PROFILES}')

    env = EnvYAML(yaml_file=f'{BASE_DIR.parent}/deployment_profile/{profile}.yaml')
    print(f'{profile.title()} profile has been loaded.')

    return env


env = load_env()
