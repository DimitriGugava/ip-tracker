import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "./map.css";
import iconlocation from "../../icons/iconlocation.svg";

const Map = (props) => {
  return (
    <MapContainer
      className="mapContainer"
      center={[43.38621, -79.83713]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[props.address.location.lat, props.address.location.lng]}
      >
        <Popup>
          A pretty CSS3 popup <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
