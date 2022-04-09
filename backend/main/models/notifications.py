from pydantic import BaseModel


class Alert(BaseModel):
    id: int
    userID: int
    title: str
    body: str
    date: str
