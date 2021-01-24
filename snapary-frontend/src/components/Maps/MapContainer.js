import React, { useEffect, useState } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
function MapContainer(props) {
    const [lat, setlat] = useState(0);
    const [lgn, setlgn] = useState(0);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                setlat(position.coords.latitude);
                setlgn(position.coords.longitude);
            });
        }
     }, []);
     /*
    componentDidMount() {
        var newState = {};
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(function(position) {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                newState = {
                    latitude: position.coords.latitude,
                    longtitude: position.coords.longitude
                }
            });
        }
        if (newState) {
            console.log(newState);
            this.setState(newState);
        }*/
        /*navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude);
            var newState = {
                latitude: position.coords.latitude,
                longtitude: position.coords.longitude
            }
            this.setState(newState);
        });    }*/
    
    const style = {
            width: '42rem',
            height: '39rem',
            border: '5px dashed pink'
        }

    return (
        <div>
            <Map google={props.google} zoom={14} containerStyle={style}
                 center={{lat: lat, lng:lgn}}>
            <Marker />
            </Map>
        </div>
    );
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAGjtHt-0VMYshXHmveiqIor0wqDvMn64k')
})(MapContainer)