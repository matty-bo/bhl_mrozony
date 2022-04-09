from typing import Optional
from pydantic import BaseModel


class User(BaseModel):
    id: int
    username: str
    password: str


class Watermeter(BaseModel):
    id: int


class Measurement(BaseModel):
    id: int
    watermeter: Watermeter
    date: str
    time: str
    usage: float
