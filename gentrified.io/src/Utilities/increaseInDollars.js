import { data } from "../data/data";

export const increaseInDollars = (hood, startYear, endYear) => {
    if (hood[endYear] !== "" && hood[startYear] !== "") return hood[endYear] - hood[startYear];

};
