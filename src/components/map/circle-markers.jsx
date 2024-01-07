import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { data } from "../../data/data";
import { calculateRentIncrease } from "../../Utilities/calculateRentIncrease";
import { getColor } from "../../Utilities/getColor";
import { useState, useEffect } from "react";

const Circlemarkers = ({ startYear, endYear }) => {
  return (
    <>
      {data.map((hood, index) => {
        let rentIncrease = calculateRentIncrease(hood, startYear, endYear);
        let color = getColor(rentIncrease);
        let latitude = parseFloat(hood.Latitude);
        let longitude = parseFloat(hood.Longitude);

        if (
          !isNaN(latitude) &&
          !isNaN(longitude) &&
          latitude >= -90 &&
          latitude <= 90 &&
          longitude >= -180 &&
          longitude <= 180
        ) {
          return (
            <CircleMarker
              key={Math.random()}
              center={[latitude, longitude]}
              radius={35}
              color="auto"
              fillColor={color}
              fillOpacity={0.2}>
              <Tooltip>{hood.Neighborhood}</Tooltip>
            </CircleMarker>
          );
        }
      })}
    </>
  );
};

export default Circlemarkers;
