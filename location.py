import geopy
from geopy.geocoders import Nominatim

area_priority_list = ['suburb', 'hamlet', 'village', 'shop', 'neighbourhood', 'town', 'city_district', 'city', 'county', 'state', 'country']


class Location:
    def __init__(self, Latitude, Longitude):
        self.lat = Latitude
        self.long = Longitude
        self.locator = Nominatim(user_agent="snapary_test")
        coordinate = f"{Latitude}, {Longitude}"
        try:
            self.location = self.locator.reverse(coordinate)
        except:
            self.location = None
            print(f"*****ERROR*****Address Nomination Failed")

    # returns a string representing the full address(if you wanna ship something)
    def get_full_address(self):
        if self.location:
            return self.location
        else:
            return "Location Not Available"

    def get_raw(self):
        if self.location:
            return self.location.raw['address']
        else:
            return "Location Not Available"

    def get_area(self):
        if self.location:
            raw_location = self.location.raw
            for area_type in area_priority_list:
                if area_type in raw_location['address']:
                    area = raw_location['address'][area_type]
                    return area
            return f"Unable to find area:{self.location.raw}"
        else:
            return f"Location not available"



