from statistics import mean
from fastapi import APIRouter
from typing import List, Optional
from datetime import date, time
from calendar import monthrange
from ..models.water_meters import Watermeter
from ..data import generator
from copy import deepcopy
import random
random.seed(100)


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
    measurements = get_average_usage(measurements, year, month, day)

    return measurements


@router.get('/alerts')
async def get_alerts(userID: int):
    return generator.generate_alerts(userID)


def get_average_usage(measurements, year, month, day):
    if not any([year, month, day]):
        measurements_mean = mean(m.usage for m in measurements)
        measurements = {
            'usage_mean': measurements_mean,
            'region_usage_mean': measurements_mean + random.random() * 3,
            'global_usage_mean': measurements_mean + random.random(),
        }
        return measurements

    if year and not month and not day:
        measurements = [entry for entry in measurements
                        if get_date_from_string(entry.date).year == year]
        month_means = []
        for m in range(1, 13):
            month_usages = [entry.usage for entry in measurements
                            if get_date_from_string(entry.date).month == m]

            if not month_usages:
                month_mean = 0
            else:
                month_mean = mean(month_usages)
            month_means.append({
                'month': m,
                'usage_mean': month_mean,
                'region_usage_mean': month_mean + random.random() * 3,
                'global_usage_mean': month_mean + random.random(),
            })
        return month_means
    if year and month and not day:
        measurements = [entry for entry in measurements
                        if get_date_from_string(entry.date).year == year and
                        get_date_from_string(entry.date).month == month]
        day_means = []
        day_in_months = monthrange(year, month)[1]
        for d in range(1, day_in_months + 1):
            day_usages = [entry.usage for entry in measurements
                          if get_date_from_string(entry.date).month == d]
            if not day_usages:
                day_mean = 0
            else:
                day_mean = mean(day_usages)
            day_means.append({
                'day': d,
                'usage_mean': day_mean,
                'region_usage_mean': day_mean + random.random() * 3,
                'global_usage_mean': day_mean + random.random(),
            })
        return day_means
    if year and month and day:
        measurements = [dict(entry) for entry in measurements
                        if get_date_from_string(entry.date) == date(year, month, day)]
        hour_means = []
        for h in range(24):
            time_h = time(h, 0, 0)
            hour_usages = [entry.usage for entry in measurements
                           if (entry['time']) == time_h]
            if not hour_usages:
                hour_mean = 0
            else:
                hour_mean = mean(hour_usages)
            hour_means.append({
                'hour': time.strftime(time_h, '%H:%M:%S'),
                'usage_mean': hour_mean,
                'region_usage_mean': hour_mean + random.random() * 3,
                'global_usage_mean': hour_mean + random.random(),
            })
        return hour_means


@router.get("/{watermeter_id}")
async def get_watermeter_measurements(
        watermeter_id: int,
        year: Optional[int] = None,
        month: Optional[int] = None,
        day: Optional[int] = None
):
    w = Watermeter(id=watermeter_id)
    measurements = get_watermeter_measurements(w)
    measurements = aggregate_water_measurements_by_date(
        measurements, year, month, day)
    return measurements


def get_measurements():
    return deepcopy(MEASUREMENTS)


def aggregate_water_measurements_by_date(
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
        'region_usage_mean': measurements_mean + random.random() * 3,
        'global_usage_mean': measurements_mean + random.random(),
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
