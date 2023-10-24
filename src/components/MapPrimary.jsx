import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapPrimary = (props) => {

    const mapStyles = {
        width: '70rem',
        height: '20rem',
      };

  return (
    <div>
        <Map
            google={props.google}
            zoom={19}
            style={mapStyles}
            initialCenter={{ lat: 6.5530000, lng: 3.3662500 }}>
            <Marker position={{ lat: 6.5530000, lng: 3.3662500 }} /> 
        </Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyApjEhbGycnsTKdSq9XiXYPES0SopNmVNc',
  })(MapPrimary);