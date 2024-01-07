import { useEffect, useState } from "react";

const TimeFrameForm = ({ startYear, setStartYear, endYear, setEndYear }) => {
  const years = [];
  for (let i = 2010; i <= 2023; i++) {
    years.push(i);
  
  }
  const startOptions = years.map((year) => {
    if (year <= endYear){
      return (
        <option value={year} key={year+4327904}>{year}</option>
    )
  }
  })
  const endOptions = years.map((year) => {
    return (
      <option value={year} key={year+454334}>{year}</option>
    )
  })

  const handleStartChange = (event) => {
    setStartYear(event.target.value);
  };
  const handleEndChange = (event) => {
    setEndYear(event.target.value);
  };

  return (
    <div className="flex justify-center items-center p-4">
      <form className="flex  gap-10 z-10">
        <select 
          value={startYear}
          onChange={handleStartChange}
          className=" border opacity-90 w-32 h-16 text-xl text-center bg-[#245EE7] text-white border-gray-300 rounded-lg"
        >
          {startOptions}
        </select>

        <select
          value={endYear}
          onChange={handleEndChange}
          className="p-2 pr-5 border opacity-90  w-32 h-16 text-xl text-center bg-[#245EE7] text-white border-gray-300 rounded-lg "
        >
          {endOptions}
        </select>
      </form>
    </div>
  );
};

export default TimeFrameForm;
