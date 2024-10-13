from fastapi import HTTPException


class UserAlreadyExistsError(HTTPException):
    def __init__(self):
        detail = "User with given email address already exists."
        status_code = 400
        super().__init__(status_code=status_code, detail=detail)



class InternalServerError(HTTPException):
    def __init__(self):
        detail = 'Something went wrong'
        status_code = 500
        super().__init__(status_code=status_code, detail=detail)