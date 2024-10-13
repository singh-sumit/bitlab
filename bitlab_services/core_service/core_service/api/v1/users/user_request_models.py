from typing import Dict

from pydantic import BaseModel, EmailStr, Field, model_validator

from service_common.enums.enums import SignUpMethod


class UserCreate(BaseModel):
    email: EmailStr = Field(max_length=255)
    password: str = Field(min_length=8, max_length=40)
    confirm_password: str = Field(min_length=8, max_length=40)
    first_name: str = Field(max_length=255)
    last_name: str = Field(max_length=255)
    signup_method: SignUpMethod = Field(SignUpMethod.EMAIL_PASSWORD)

    @model_validator(mode='before')
    @classmethod
    def validate_user(cls, data: Dict):
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if password != confirm_password:
            raise ValueError(f'Value for "password" and "confirm_password" must be same.')

        return data