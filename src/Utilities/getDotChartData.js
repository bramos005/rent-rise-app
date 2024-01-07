import { data } from "../data/data";
import { increaseInDollars } from "./increaseInDollars";

export const getDotChartData = (startYear, endYear) => {
  const res = data.map((hood,i) => {
    return {
      x:i ,
      y: increaseInDollars(hood, startYear, endYear),
      name: hood.Neighborhood
    };
  });
    return res;
};
