import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapSecondary = (props) => {

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
            initialCenter={{ lat: 6.594220, lng: 3.337480 }}>
            <Marker position={{ lat: 6.594220, lng: 3.337480 }} /> 
        </Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyApjEhbGycnsTKdSq9XiXYPES0SopNmVNc',
  })(MapSecondary);