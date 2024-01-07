import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getBarChartValues } from "../../Utilities/getBarChartValues";

export const BoroughChart = ({ startYear, endYear }) => {
  const data = getBarChartValues(startYear, endYear);
  const percentFormatter = (value) => `${value}%`;

  return (
    <div className="flex justify-center">
      <div className="border flex w-4/6 justify-center flex-col gap-5 items-center rounded-md h-[32rem] lg:h-[40rem]">
        <div className="flex flex-col gap-1 pt-10 items-center">
          <h1 className="text-center font-bold">Average Rent Increase By Borough(%)</h1>
          <p>
            {startYear}-{endYear}
          </p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 20,
              bottom: 60,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" />
            <YAxis />
            <Tooltip cursor={false} formatter={percentFormatter} />
            <Bar dataKey="avg" fill="#245EE7" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BoroughChart;
