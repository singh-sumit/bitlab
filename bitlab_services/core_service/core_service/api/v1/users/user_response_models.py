from beanie import PydanticObjectId
from pydantic import EmailStr, BaseModel, Field

from service_common.enums.enums import SignUpMethod


class UserResponseModel(BaseModel):
    id: PydanticObjectId = Field()
    email: EmailStr = Field(max_length=255)
    first_name: str = Field(max_length=255)
    last_name: str = Field(max_length=255)
    signup_method: SignUpMethod = Field(SignUpMethod.EMAIL_PASSWORD)


