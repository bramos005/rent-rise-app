import Map from "./map/map";
import BoroughChart from "./charts/BoroughChart";
import TimeFrameForm from "./map/TimeFrameForm";
import "./leaflet.css";
import { useEffect, useState } from "react";
import { DotChart } from "./charts/DotChart";
const MapPage = () => {
  const [startYear, setStartYear] = useState("2010");
  const [endYear, setEndYear] = useState("2015");
  const handleStartChange = (event) => {
    setStartYear(event.target.value);
  };

  const handleEndChange = (event) => {
    setEndYear(event.target.value);
  };

  return (
    <>
      <Map startYear={startYear} endYear={endYear}></Map>
      <TimeFrameForm
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}></TimeFrameForm>
      <div className="flex flex-col gap-56 mb-[14rem]">
      <div className="mt-[14rem] ">
        <BoroughChart startYear={startYear} endYear={endYear} />
      </div>
      <div>
        <DotChart startYear={startYear} endYear={endYear} />
        </div>
      </div>
    </>
  );
};

export default MapPage;
