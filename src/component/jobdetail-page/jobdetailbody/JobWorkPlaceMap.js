import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function JobWorkPlaceMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyALbiucPQ_IVq0E9d0kK_Z9UfyIhyUWDQE',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 37.5102, lng: 127.04413 }), []);

  return (
    <GoogleMap
      zoom={18}
      center={center}
      mapContainerClassName="jobWorkPlaceMap"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
