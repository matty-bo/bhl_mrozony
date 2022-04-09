from fastapi import APIRouter
from typing import Optional
import datetime
from ..models.watermeters import Watermeter

router = APIRouter(
    prefix="/watermeters",
    tags=["watermeters"],
)


@router.get("/{watermeter_id}")
async def read_watermeters(
        year: Optional[int] = None,
        month: Optional[int] = None,
        day: Optional[int] = None
):
    data = getWatermeterMeasurements()
    if year:
        data = [entry for entry in data.values()
                if getDateFromString(entry.date).year == year]
    if month:
        data = [entry for entry in data.values()
                if getDateFromString(entry.date).month == month]
    if day:
        data = [entry for entry in data.values()
                if getDateFromString(entry.date).day == day]
    return data


def getMeasurements():
    return {

    }


def getWatermeterMeasurements(watermeter: Watermeter):
    return {

    }


def getDateFromString(date_string):
    datetime.datetime.strptime(date_string.date, "%Y-%m-%d")
