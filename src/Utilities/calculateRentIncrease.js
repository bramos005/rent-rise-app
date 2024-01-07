export const calculateRentIncrease = (hood, startYear, endYear) => {
  const rentStart = Number(hood[startYear]);
  const rentEnd = Number(hood[endYear]);

  if (rentStart === 0 || rentEnd === 0 || isNaN(rentStart) || isNaN(rentEnd)) {
    return 0;
  } else {
    return ((rentEnd - rentStart) / rentStart) * 100;
  }
};
