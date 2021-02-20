import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import L, { LatLngTuple, tileLayer, TileLayer } from "leaflet";
import "../../node_modules/leaflet/dist/leaflet.css";
const position: any = [34.8, 48.5167];
export const LeafletMap = () => {
  return (
    <MapContainer
      id="mapId"
      style={{ width: "100%", height: "15rem" }}
      center={position}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
