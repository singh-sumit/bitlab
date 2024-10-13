from beanie import Document, Indexed

from service_common.enums.enums import SignUpMethod


class User(Document):
    email: Indexed(str, unique=True)
    password: str
    first_name: str
    last_name: str
    signup_method: SignUpMethod

    class Settings:
        name = 'users'


