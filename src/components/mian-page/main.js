import DropDown from "../drop-down/drop-down";
import LineChart from "../line-chart/line-chart";
import "./main.css";
import { useState } from "react";
import { month } from "../helps/monthes";
import Menu from "../menu/menu";
import { numberOfLessons } from "../helps/monthes";
import { useSelector } from "react-redux";

const Main = () => {
  const alldata = useSelector((data) => data.data);
  const camps = useSelector((data) => data.camps);
  const countries = useSelector((data) => data.countries);
  const [camp, setCamp] = useState(camps[0]);
  const [country, setCountry] = useState(countries[0]);
  const filterdata = alldata.filter(
    (e) => e.country == country && e.camp == camp
  );

  const schools = [...new Set(filterdata.map((e) => e.school))];
  const [chartdata, setChartdata] = useState({
    labels: month,
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  });

  const selectCountry = (value) => {
    setCountry(value.target.value);
  };

  const selectCamp = (value) => {
    setCamp(value.target.value);
  };
  const filterbyschool = (s, checked) => {
    if (!checked)
      setChartdata({
        ...chartdata,
        datasets: chartdata.datasets.concat({
          label: s,
          data: filterdata
            .filter((e) => e.school == s)
            .map((data) => data.lessons),
          borderColor: `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")}`,
          borderWidth: 2,
        }),
      });
    else {
      console.log(s);
      setChartdata({
        ...chartdata,
        datasets: chartdata.datasets.filter((e) => e.label != s),
      });
    }
  };
  return (
    <>
      {console.log(filterdata)}
      <div className="container">
        <h1 className="mt-5">Analysis Chart</h1>
        <h4 className="mt-5">Number of Lessons</h4>
        <div className="d-flex justify-content-around">
          <DropDown
            value={country}
            select={selectCountry}
            title="Select country"
            data={countries}
          />
          <DropDown
            value={camp}
            select={selectCamp}
            title="Select camp"
            data={camps}
          />
          <DropDown showAll={true} title="Select school" data={schools} />
        </div>
        <div className="row mt-5">
          <div className="col-8 ">
            <LineChart chartdata={chartdata} />
          </div>
          <div className="col-4 text-center ">
            <h1>
              
              <span className="mx-2">{filterdata.length}</span>Lessons
            </h1>
            <h6>
              in <span className="mx-2">{camp}</span>
            </h6>
            <div  className="mt-4 menu">
              <ul >
                {schools.map((s, index) => (
                  <Menu
                    key={index}
                    check={filterbyschool}
                    data={s}
                    numOfLessons={numberOfLessons(s, filterdata)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
