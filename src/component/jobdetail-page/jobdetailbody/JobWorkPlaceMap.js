import { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
//import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

export default function JobWorkPlaceMap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    version: '3.47',
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map lat={props.lat} lng={props.lng}/>;
}
function Map(props) {

  const center = useMemo(() => ({ lat: (props.lat+0.00002), lng: (props.lng+0.00003) }), []);
  const markerCenter = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);

  return (
    <GoogleMap
      zoom={18}
      center={center}
      mapContainerClassName="jobWorkPlaceMap"
    >
      <MarkerF position={markerCenter} />
    </GoogleMap>
  );
}
