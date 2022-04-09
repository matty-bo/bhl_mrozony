from ..models.water_meters import Measurement, Watermeter
import random
from datetime import time, date, timedelta

START_DATE = date(2022, 1, 1)
END_DATE = date(2022, 5, 31)
MEASUREMENT_ID_SEQ = 0
DELTA = END_DATE - START_DATE


def measurements():
    measurements_list = []
    w = Watermeter(id=0)
    watermeters_list = [Watermeter(id=i) for i in range(4)]
    for w in watermeters_list:
        for i in range(DELTA.days + 1):
            day = START_DATE + timedelta(days=i)
            day = date.strftime(day, "%Y-%m-%d")
            dm = generate_day_measurements(w, day)
            measurements_list += dm

    return measurements_list


def generate_day_measurements(watermeter: Watermeter, day: str):
    global MEASUREMENT_ID_SEQ
    day_list = []
    for i in range(24):
        hour = time(hour=i)
        hour = time.strftime(hour, '%H:%M:%S')
        m = Measurement(**{
            'id': MEASUREMENT_ID_SEQ,
            'watermeter': watermeter,
            'date': day,
            'time': hour,
            'usage': random.random()
        })
        day_list.append(m)
        MEASUREMENT_ID_SEQ += 1
    return day_list
