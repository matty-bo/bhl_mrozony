from fastapi import APIRouter
from typing import List, Optional
from datetime import datetime
from ..models.watermeters import Measurement, Watermeter
from ..data import generator
from copy import deepcopy


router = APIRouter(
    prefix="/watermeters",
    tags=["watermeters"],
)

MEASUREMENTS = generator.measurements()


@router.get("/all")
async def get_all_measurements(
        year: Optional[int] = None,
        month: Optional[int] = None,
        day: Optional[int] = None
):
    measurements = get_measurements()
    measurements = filter_measurements_by_date(measurements, year, month, day)
    return measurements


@router.get("/{watermeter_id}")
async def get_watermeter_measurements(
        watermeter_id: int,
        year: Optional[int] = None,
        month: Optional[int] = None,
        day: Optional[int] = None
):
    w = Watermeter(id=watermeter_id)
    measurements = get_watermeter_measurements(w)
    measurements = filter_measurements_by_date(measurements, year, month, day)
    return measurements


def get_measurements():
    return deepcopy(MEASUREMENTS)


def filter_measurements_by_date(
    measurements: List[Measurement],
    year: Optional[int] = None,
    month: Optional[int] = None,
    day: Optional[int] = None
):
    if year:
        measurements = [entry for entry in measurements
                        if get_date_from_string(entry.date).year == year]
    if month:
        measurements = [entry for entry in measurements
                        if get_date_from_string(entry.date).month == month]
    if day:
        measurements = [entry for entry in measurements
                        if get_date_from_string(entry.date).day == day]
    return measurements


def get_watermeter_measurements(watermeter: Watermeter):
    measurements = get_measurements()
    measurements = [m for m in measurements if m.watermeter == watermeter]
    return measurements


def get_date_from_string(date_string):
    return datetime.strptime(date_string, "%Y-%m-%d")
