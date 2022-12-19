import React from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import iconlocation from "../../icons/iconlocation.svg";
import { useEffect, useMemo } from "react";
import { map } from "leaflet";

export default function MarkerPosition(props) {
  const position = useMemo(() => {
    return [props.address.location.lat, props.address.location.lng];
  }, [props.address.location.lat, props.address.location.lng]);

  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]); // fly to method - position (where to fly), 13 is the zoom size. animate is smooth zooming. map is important from react-leaflet
  return (
    <>
      <Marker position={props.position}>
        <Popup>
          A pretty CSS3 popup <br /> Easily customizable.
        </Popup>
      </Marker>
    </>
  );
}
