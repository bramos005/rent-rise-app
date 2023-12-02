import { useEffect, useState } from "react";

const TimeFrameForm = ({ startYear,setStartYear,endYear,setEndYear}) => {
  let yearOptions = [];
  for (let i = 2010; i <= 2023; i++) {
    yearOptions.push(<option value={i}>{i}</option>);
  }

  // const [startDate, setStartDate] = useState('2010');
  // const [endDate, setEndDate] = useState('2015');
  
  const handleStartChange = (event) => {
    setStartYear(event.target.value);
  
  };
  const handleEndChange = (event) => {
    setEndYear(event.target.value);
   
    
 
  };
 
  // useEffect(()=>{
  //   console.log([startYear,endYear])
  // },[endYear,startYear])
  
    
  return (
    <div className="TimeFrameForm-container">
      <form className="TimeFrameForm">
        <select
          value={startYear}
          onChange={handleStartChange}
         
          className="year-options">
          {yearOptions}
        </select>

        <select
          value={endYear}
          onChange={handleEndChange}
          className="year-options">
          {yearOptions}
        </select>
      </form>
    </div>
  );
};

export default TimeFrameForm;
