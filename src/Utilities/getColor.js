export const getColor = (rentIncrease) => {
  if (rentIncrease <= 5) return "#00FF00";
  if (rentIncrease <= 10) return "#7FFF00";
  if (rentIncrease <= 15) return "#BFFF00";
  if (rentIncrease <= 20) return "#FFFF00";
  if (rentIncrease <= 25) return "#FFBF00";
  return "#FF0000";
};
