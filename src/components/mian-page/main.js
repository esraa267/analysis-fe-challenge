import DropDown from "../drop-down/drop-down";
import LineChart from "../line-chart/line-chart";
import "./main.css";
import Menu from "../menu/menu";
import { numberOfLessons } from "../helps/monthes";
import { useDispatch, useSelector } from "react-redux";
import { FilterData, FilterData2 } from "../../store/action";

const Main = () => {
  const dispatch = useDispatch();
  const filterdata = useSelector((data) => data.data);
  const camps = useSelector((data) => data.camps);
  const countries = useSelector((data) => data.countries);
  const camp = useSelector((data) => data.camp);
  const country = useSelector((data) => data.country);
  const schools = useSelector((data) => data.schools);

  const selectCountry = (value) => {
    dispatch(FilterData(value.target.value));
  };
  const selectCamp = (value) => {
    dispatch(FilterData2(value.target.value));
  };
  const chartdata = useSelector((data) => data.chartdata);
 
  return (
    <>
      {console.log(chartdata)}
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
          <DropDown
            showAll={true}
            title="Select school"
            data={schools.map((e) => e.data)}
          />
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
            <div className="mt-4 menu">
              <ul>
                {schools.map((s, index) => (
                  <Menu
                    index={index}
                    checked={s.check}
                    key={index}
                    data={s.data}
                    numOfLessons={numberOfLessons(s.data, filterdata)}
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
