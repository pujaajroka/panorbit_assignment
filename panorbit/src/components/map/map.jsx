import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
const location = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 11
};


const Map = (props) => {
  const [user, setUser] = useState(props.user);
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [defaultProps, setDefautProps] = useState(location);
 
   useEffect(() => {
    if(user.address) {
      location.center.lat = user.address.geo.lat;
      location.center.lng = user.address.geo.lng;
      setDefautProps(location);
      setUser(props.user);
    }
   
   }, [user])
 
  
  return (
    <div style={{ height: '430px', width: '100%' }}>
      {user && defaultProps &&
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={user.address.geo.lat}
          lng={user.address.geo.lng}
          text="My Marker"
        />
      </GoogleMapReact>
      }
    </div>
  )
}

export default Map;
