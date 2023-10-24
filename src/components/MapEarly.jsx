import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapEarly = (props) => {
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
            initialCenter={{ lat: 6.5502413, lng: 3.3668412 }}>
            <Marker position={{ lat: 6.5504000, lng: 3.3665000 }} /> 
        </Map>
    </div>
  )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyApjEhbGycnsTKdSq9XiXYPES0SopNmVNc',
  })(MapEarly);