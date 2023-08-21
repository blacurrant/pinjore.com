import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Maps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: `AIzaSyB6eLatJ9T5WJwCFtYBjFTSTZ3dCbjEYXs`,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 	30.797012, lng: 76.917793  }), []);

  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="h-screen w-full">
      <MarkerF position={center} />
    </GoogleMap>
  );
}