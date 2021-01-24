import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longtitude: 0
        };
    }

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
            this.setState(newState);
        }
        /*navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude);
            var newState = {
                latitude: position.coords.latitude,
                longtitude: position.coords.longitude
            }
            this.setState(newState);
        });*/
    }

    render() {
        const style = {
            width: '42rem',
            height: '39rem',
            border: '5px dashed pink'
        }
        return (
            <div>
                <Map google={this.props.google} zoom={14} containerStyle={style}
                     center={{lat: this.state.latitude, lng:this.state.longtitude}}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                </Map>
            </div>
        );
    }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyAGjtHt-0VMYshXHmveiqIor0wqDvMn64k')
})(MapContainer)