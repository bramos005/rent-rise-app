import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getDotChartData } from "../../Utilities/getDotChartData";

export const DotChart = ({ startYear, endYear }) => {
  const data = getDotChartData(startYear, endYear);
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const tooltipStyle = {
        border: "1px solid #ccc",
        backgroundColor: "black",
        color: "white",
        opacity: ".9",
        padding: "5px",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
      };

      return (
        <div className="custom-tooltip" style={tooltipStyle}>
          <p>{`Neighborhood: ${payload[0].payload.name}`}</p>
          <p>{`Increase: $${Math.floor(payload[1].value)}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex justify-center">
      <div className="border flex w-4/6 justify-center flex-col gap-5 items-center rounded-md h-96 2xl:h-[40rem]">
        <div className="flex flex-col gap-1 pt-10 items-center">
          <h1 className="text-center font-bold"> Rent Increase by Neighborhood ($)</h1>
          <p>{startYear}-{endYear}</p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
            <CartesianGrid />
            <XAxis type="number" dataKey="x" name="Neighborhood:" tick={false} />
            <YAxis type="number" dataKey="y" name="y-axis" />
            <Tooltip content={<CustomTooltip />} />
            <Scatter name="Values" data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DotChart;
