import { colors, month } from "../components/helps/monthes";

const alldata = require("../data.json");
const initial = {
  data: alldata,
  camps: [...new Set(alldata.map((e) => e.camp))],
  countries: [...new Set(alldata.map((e) => e.country))],
  country: "",
  camp: "",
  schools: [],
  chartdata: { labels: month, datasets: [{ label: "", data: [] }] },
};
export default function dataReducer(state = initial, action) {
  if (action.type == "FILTER-DATA") {
    return {
      ...state,
      chartdata: { labels: month, datasets: [{ label: "", data: [] }] },
      country: action.payload,
      data: alldata.filter(
        (e) => e.country == action.payload && e.camp == state.camp
      ),
      schools: [
        ...new Set(
          alldata
            .filter((e) => e.country == action.payload && e.camp == state.camp)
            .map((e) => e.school)
        ),
      ].map((el) => {
        return { data: el, check: false };
      }),
    };
  } else if (action.type == "FILTER-DATA2") {
    return {
      ...state,
      chartdata: { labels: month, datasets: [{ label: "", data: [] }] },
      camp: action.payload,
      data: alldata.filter(
        (e) => e.country == state.country && e.camp == action.payload
      ),
      schools: [
        ...new Set(
          alldata
            .filter(
              (e) => e.country == state.country && e.camp == action.payload
            )
            .map((e) => e.school)
        ),
      ].map((el) => {
        return { data: el, check: false };
      }),
    };
  } else if (action.type == "FILTER-SCHOOLS") {
    return {
      ...state,
      schools: state.schools.map((obj, index) => {
        if (index === action.payload) {
          return { ...obj, check: !obj.check };
        }

        return obj;
      }),
      chartdata: {
        labels: month,
        datasets: state.schools
          .map((obj, index) => {
            if (index === action.payload) {
              return { ...obj, check: !obj.check };
            }

            return obj;
          })
          .map((e, index) => {
            if (e.check == true) {
              return {
                ...e,
                label: e.data,
                data: state.data
                  .filter((el) => el.school == e.data)
                  .map((data) => data.lessons),
                borderColor: colors[index],
                borderWidth: 2,
                responsive: true,
              };
            } else {
              return {
                ...e,
                label: "",
                data: [],
              };
            }
          }),
      },
    };
  } else {
    return {
      ...state,
      data: alldata.filter(
        (e) => e.country == state.countries[0] && e.camp == state.camps[0]
      ),
      country: state.countries[0],
      camp: state.camps[0],
      schools: [
        ...new Set(
          alldata
            .filter(
              (e) => e.country == state.countries[0] && e.camp == state.camps[0]
            )
            .map((e) => e.school)
        ),
      ].map((el) => {
        return { data: el, check: false };
      }),
    };
  }
}
