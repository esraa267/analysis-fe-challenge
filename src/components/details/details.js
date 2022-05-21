import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Details = () => {
  const params = useParams();
  const filterdata = useSelector((data) => data.data);
  const chartdata = useSelector((data) => data.chartdata);
  const item = filterdata.filter(
    (e) => e.school == chartdata.datasets[params.dataindex].label
  )[params.index];
  const list = [];
  for (let i in item) {
    console.log(i, item[i]);
    list.push(
      <tr key={i}>
        <th scope="row">{i}</th>
        <td>{item[i]}</td>
      </tr>
    );
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">data</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </>
  );
};
export default Details;
