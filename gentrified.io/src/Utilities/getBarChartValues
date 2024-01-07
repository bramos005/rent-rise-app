import { calculateRentIncrease } from "./calculateRentIncrease";
import { calculateAverage } from "./calculateAverage";
import { data } from "../data/data";

export const getBarChartValues = (startYear, endYear) => {
  let bronx = [];
  let manhattan = [];
  let queens = [];
  let brooklyn = [];
  let statenIsland = [];
  data.forEach((hood) => {
    if (hood.area === "Bronx") {
      bronx.push(calculateRentIncrease(hood, startYear, endYear));
    }
    if (hood.area === "Manhattan") {
      manhattan.push(calculateRentIncrease(hood, startYear, endYear));
    }
    if (hood.area === "Queens") {
      queens.push(calculateRentIncrease(hood, startYear, endYear));
    }
    if (hood.area === "Brooklyn") {
      brooklyn.push(calculateRentIncrease(hood, startYear, endYear));
    } else {
      statenIsland.push(calculateRentIncrease(hood, startYear, endYear));
    }
  });

  return [
    { name: "Bronx", avg: Math.floor(calculateAverage(bronx)) },
    { name: "Manhattan", avg: Math.floor(calculateAverage(manhattan)) },
    { name: "Brooklyn", avg: Math.floor(calculateAverage(brooklyn)) },
    { name: "Queens", avg: Math.floor(calculateAverage(queens)) },
    { name: "Staten Island", avg: Math.floor(calculateAverage(statenIsland)) },
  ];
};
