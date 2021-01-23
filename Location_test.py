from Location import Location as LC

coordinate_list = [[51.10182014819713, -114.17764491534524],
                   [49.255711088513465, -123.18431855101835],
                   [49.26583341382034, -123.25124266413434],
                   [35.71029590127995, 139.80976357872905],
                   [49.227482597706405, -122.9999318214688],
                   [49.238280829778404, -122.97387388324273],
                   [49.24264037099486, -122.93537749094077]]

for coordinate in coordinate_list:
    location = LC(coordinate[0], coordinate[1])
    print(location.get_raw_location())
    print(location.get_area())



