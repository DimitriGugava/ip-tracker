import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "./map.css";
import { useEffect } from "react";
import MarkerPosition from "./MarkerPosition";
const Map = (props) => {
  return (
    <MapContainer
      className="mapContainer"
      center={[props.address.location.lat, props.address.location.lng]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerPosition
        position={[props.address.location.lat, props.address.location.lng]}
        address={props.address}
      />
    </MapContainer>
  );
};

export default Map;
