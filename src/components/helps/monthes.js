const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const colors = ["red", "green", "blue", "black"];
const numberOfLessons = (school, filterdata) => {
  const count = {};

  filterdata.forEach((element) => {
    count[element.school] = (count[element.school] || 0) + 1;
  });

  return count[school];
};
export { month, numberOfLessons,colors };
