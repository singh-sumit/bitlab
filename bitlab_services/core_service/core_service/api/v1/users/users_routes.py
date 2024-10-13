from fastapi import APIRouter

from core_service.api.v1.users.user_request_models import UserCreate
from core_service.api.v1.users.user_response_models import UserResponseModel
from core_service.errors import UserAlreadyExistsError, InternalServerError
from service_common.database.db_manager import users_db_manager

router = APIRouter()


@router.post("/", response_model=UserResponseModel)
async def create_user(*, user_in: UserCreate):
    try:
        user_in_db = await users_db_manager.get_user_by_email(user_in.email)
        if user_in_db:
            raise UserAlreadyExistsError

        user = await users_db_manager.create_user(email=user_in.email, password=user_in.password, first_name=user_in.first_name,
                                            last_name=user_in.last_name, signup_method=user_in.signup_method)

        return user

    except UserAlreadyExistsError:
        raise

    except Exception as exc:
        print("Exception ", exc)
        raise InternalServerError
