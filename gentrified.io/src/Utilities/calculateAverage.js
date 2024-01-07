export const calculateAverage = (nums) => {
  if (nums.length === 0) return 0;

  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  return sum / nums.length;
};
