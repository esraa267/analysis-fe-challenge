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
        <h1 className="my-5">Analysis Chart</h1>
        <div className="d-flex justify-content-around">
          <DropDown
            value={country}
            select={selectCountry}
            title="Country"
            data={countries}
          />
          <DropDown
            value={camp}
            select={selectCamp}
            title="Camp"
            data={camps}
          />
          <DropDown
            showAll={true}
            title="School"
            data={schools.map((e) => e.data)}
          />
        </div>
        <div className="row mt-5">
          <div className="col-md-8 col-sm-12 ">
            <LineChart chartdata={chartdata} />
          </div>
          <div className="col-md-4 col-sm-12 text-center ">
            <h1>
              <span className="mx-2">{filterdata.length}</span>Lessons
            </h1>
            <h6>
              in <span className="mx-2">{camp}</span>
            </h6>
            <div className="mt-4 menu">
              <ul className="d-flex flex-lg-column flex-sm-wrap">
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
