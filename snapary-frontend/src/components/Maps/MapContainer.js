import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
    render() {
        const style = {
            width: '42rem',
            height: '39rem',
            border: '5px dashed pink'
        }
        return (
            <div>
                <Map google={this.props.google} zoom={14} containerStyle={style}>
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