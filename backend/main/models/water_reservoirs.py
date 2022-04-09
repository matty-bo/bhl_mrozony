from pydantic import BaseModel


class WaterReservoir(BaseModel):
    id: int


class Region(BaseModel):
    id: int
