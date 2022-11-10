import { useMemo, useState } from 'react';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';
import JobDetailZip from '../../../json/JobDetail/JobDetailZip.json';

export default function JobWorkPlaceMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyALbiucPQ_IVq0E9d0kK_Z9UfyIhyUWDQE',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
// console.log(JobDetailZip.Zip.PlaceAddress.lat);
function Map() {
  // const [Lat, setLat] = useState(0);///
  // const getLat () => {
  //   setLat({JobDetailZip.Zip.PlaceAddress.lat})
  // }
  // const getLat = (JobDetailZip.Zip.PlaceAddress.lat) => {
  //   return
  // }
  //setLat(JobDetailZip.Zip.PlaceAddress.lat);
  // const center = useMemo(
  //   () => ({ lat: setLat(JobDetailZip.Zip.PlaceAddress.lat), lng: 127.04413 }),
  //   []
  // );
  const center = useMemo(() => ({ lat: 37.510091, lng: 127.04413 }), []);
  const markerCenter = useMemo(() => ({ lat: 37.510091, lng: 127.044133 }), []);
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
