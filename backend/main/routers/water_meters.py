from functools import reduce
from statistics import mean
from fastapi import APIRouter
from typing import List, Optional
from datetime import date, time
from calendar import monthrange
from ..models.water_meters import Measurement, Watermeter
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
    measurements: List,
    year: Optional[int] = None,
    month: Optional[int] = None,
    day: Optional[int] = None
):
    if year and not month and not day:
        measurements = [entry for entry in measurements
                        if get_date_from_string(entry.date).year == year]
        measurements = aggregate_by_month(measurements)
    if year and month and not day:
        measurements = [entry for entry in measurements
                        if get_date_from_string(entry.date).year == year and
                        get_date_from_string(entry.date).month == month]
        measurements = aggregate_by_day(measurements, year, month)
    if year and month and day:
        measurements = [dict(entry) for entry in measurements
                        if get_date_from_string(entry.date) == date(year, month, day)]

    measurements_mean = mean(dict(m)['usage'] for m in measurements)
    measurements = {
        'usage_mean': measurements_mean,
        'region_usage_mean': measurements_mean + 3,
        'global_usage_mean': measurements_mean + 1,
        'usages': measurements
    }
    return measurements


def get_watermeter_measurements(watermeter: Watermeter):
    measurements = get_measurements()
    measurements = [m for m in measurements if m.watermeter == watermeter]
    return measurements


def aggregate_by_month(measurements):
    month_usage_list = []
    for month in range(1, 12):
        usage_sum = sum(
            m.usage for m in measurements
            if get_date_from_string(m.date).month == month
        )
        month_usage_list.append({"month": month, "usage": usage_sum})
    return month_usage_list


def aggregate_by_day(measurements, year, month):
    day_usage_list = []

    day_in_months = monthrange(year, month)[1]
    for day in range(1, day_in_months + 1):
        usage_sum = sum(
            m.usage for m in measurements
            if get_date_from_string(m.date).day == day
        )
        day_usage_list.append({"day": day, "usage": usage_sum})
    return day_usage_list


def get_date_from_string(date_string):
    return date.fromisoformat(date_string)
