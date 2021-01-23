from location import Location as LC
import sys
import firestore
from datetime import datetime

coordinate_list = [[51.10182014819713, -114.17764491534524],
                   [49.255711088513465, -123.18431855101835],
                   [49.26583341382034, -123.25124266413434],
                   [35.71029590127995, 139.80976357872905],
                   [49.227482597706405, -122.9999318214688],
                   [49.238280829778404, -122.97387388324273],
                   [49.24264037099486, -122.93537749094077]]


def print_entry(username, time, longitude, latitude, area):
    print({u'time': time, u'longitude': longitude, u'latitude': latitude, u'area': area})


for coordinate in coordinate_list:
    location = LC(coordinate[0], coordinate[1])
    print(location.get_raw_location())
    area = location.get_area()
    if sys.argv[0]:
        print_entry("grant1", datetime.now().strftime("%d/%m/%Y %H:%M:%S"), coordinate[0], coordinate[1], area)
        firestore.save_entry("grant1", datetime.now().strftime("%d/%m/%Y %H:%M:%S"), coordinate[0], coordinate[1], area)






