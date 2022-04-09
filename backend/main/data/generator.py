from ..models.water_meters import Measurement, Watermeter
from ..models.notifications import Alert
from datetime import time, date, timedelta
import random

random.seed(100)

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


def generate_alerts(userID):
    a1 = Alert(**{
        'id': 0,
        'userID': userID,
        'title': 'Przerwy w dostawie wody',
        'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem mauris, viverra at diam a, suscipit commodo urna. Etiam rhoncus ornare rutrum. Etiam in nisl posuere, condimentum orci id, semper nisi. Phasellus posuere sem id est ornare, laoreet finibus diam dignissim. Mauris vulputate blandit est, nec auctor metus venenatis vitae. Morbi maximus bibendum diam, ac lacinia est viverra vel. Pellentesque quis vulputate libero. Sed ultricies, urna id tincidunt mattis, dolor sem auctor leo, eu faucibus urna ex at erat. Mauris sed urna sem.',
        'date': '2022-02-05',
    })

    a2 = Alert(**{
        'id': 1,
        'userID': userID,
        'title': 'Alert niskiego poziomu wody',
        'body': 'Ut elit neque, sodales nec risus quis, convallis gravida tellus. Curabitur sit amet diam non odio finibus molestie. Pellentesque in mi eget sapien efficitur vehicula. Quisque a pulvinar elit, at ornare metus. Donec tincidunt congue tellus aliquam pharetra. Pellentesque molestie lacus a ipsum posuere, at bibendum nisl viverra. In sed suscipit lacus. Nunc vel neque aliquam, condimentum velit a, congue enim. Vivamus est elit, accumsan eget suscipit id, egestas nec massa.',
        'date': '2022-04-23',
    })

    return [a1, a2]
