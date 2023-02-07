import { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";
import { divide } from "lodash";

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
console.log(key);
type Props = {};
const mapContainerStyle = {
  width: "100vw",
  height: "50vh",
};
const center = {
  lat: 43,
  lng: -79,
};
const libraries = String(["places"]);
const Map = (props: Props) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "",
    [libraries]: libraries,
  });

  if (loadError) return <p>"error loadin" </p>;
  // if (!loadError) return <p;>{loadError} </p;
  console.log(isLoaded);
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
        ></GoogleMap>
      ) : (
        <div>Boom</div>
      )}
    </>
  );
};

export default Map;
