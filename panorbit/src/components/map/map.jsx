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
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0)
 
   useEffect(() => {
    if(user.address) {     
      setLat(convertToNum(user.address.geo.lat));
      setLng(convertToNum(user.address.geo.lng))
      setUser(props.user);
    }
   
   }, [user])
 
  const convertToNum = (str) => {
    str = user.address.geo.lng.replace(/[^\d-.]/g, '')
    const toArry = str.split('');
    const findMinus = toArry.filter(t => t === '-');
    if(findMinus.length > 1) {
       const rest = toArry.filter(n => n !== '-')
       const newValue = rest.join('');
       return parseFloat('-' + newValue); 
    }    
    return parseFloat(str);
  }
  return (
    <div style={{ height: '430px', width: '100%' }}>
      {user && defaultProps &&
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={lat}
          lng={lng}
          text="My Marker"
        />
      </GoogleMapReact>
      }
    </div>
  )
}

export default Map;
