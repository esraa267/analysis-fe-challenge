const alldata = require("../data.json");
const initial = {
  data: alldata,
  camps: [...new Set(alldata.map((e) => e.camp))],
  countries: [...new Set(alldata.map((e) => e.country))],
};
export default function filterdataReducer(state = initial, action) {
  if (action.type == "FILTER-DATA") {
      console.log(action.payload)
    return {
      ...state,
      data:action.payload
    };
  } else {
    return state;
  }
}
