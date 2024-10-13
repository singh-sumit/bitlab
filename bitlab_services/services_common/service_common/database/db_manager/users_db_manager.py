from typing import Optional

from service_common.database.documents.user import User
from service_common.enums.enums import SignUpMethod
from service_common.utils.password_utils import get_password_hash


async def get_user_by_email(email: str) -> Optional[User]:
    queryset= await User.find_one({'email': email})

    return queryset


async def create_user(email: str, password: str, first_name: str, last_name: str, signup_method: SignUpMethod) -> User:
    hashed_password = get_password_hash(password)
    db_obj = User(email=email, password=hashed_password, first_name=first_name, last_name=last_name, signup_method=signup_method)
    await db_obj.insert()

    return db_obj

