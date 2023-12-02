import Map from "./map/map";
import TimeFrameForm from "./map/TimeFrameForm";
import "./map.css";
import { useEffect, useState } from "react";
 const MapPage = () => {
  const [startYear, setStartYear] = useState("2010");
  const [endYear, setEndYear] = useState("2015");
  const handleStartChange = (event) => {
    setStartYear(event.target.value);
  };

  const handleEndChange = (event) => {
    setEndYear(event.target.value);
  };

  //   useEffect(() => {
  //    console.log([startYear,endYear])
  //  },[startYear,endYear])

  return (
    <>
      <TimeFrameForm
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}></TimeFrameForm>
      <Map startYear={startYear} endYear={endYear}></Map>
    </>
  );
};

export default MapPage