import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import data from "../data/data.json"
import { useState,useEffect } from "react";

console.log(data)
const Circlemarkers = ({ startYear, endYear }) => {

  const calculateRentIncrease = (hood) => {


   
    const rentStart = Number(hood[startYear]);
  
    const rentEnd = Number(hood[endYear]);
  
    if (rentStart === 0 ||rentEnd===0 || isNaN(rentStart) || isNaN(rentEnd)) {
      return 0
    }else{return(((rentEnd - rentStart) / rentStart) * 100);}
   
    
  };


  const getColor = (rentIncrease) => {
    
    if (rentIncrease <= 5) {
      // Light green
      return "#00FF00"; // Green
    } else if (rentIncrease <= 10) {
      // Green to yellow-green
      return "#7FFF00"; // Lighter green
    } else if (rentIncrease <= 15) {
      // Yellow-green to yellow
      return "#BFFF00"; // Yellowish-green
    } else if (rentIncrease <= 20) {
      // Yellow
      return "#FFFF00"; // Yellow
    } else if (rentIncrease <= 25) {
      // Yellow to orange
      return "#FFBF00"; // Orange-yellow
    } else {
      // Orange to red
      return "#FF0000"; // Red
    }
  }
  
  

  return (
    <>
      

      {data.map((hood, index) => {
        let rentIncrease = calculateRentIncrease(hood);
        let color = getColor(rentIncrease)

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
              
             
            key={ Math.random()}
              center={[latitude, longitude]}
              radius={35}
              color='auto'
             
             fillColor={color}
              fillOpacity={0.2}
              />
           
          );
        }
      })}
    </>
  );
};

export default Circlemarkers;
