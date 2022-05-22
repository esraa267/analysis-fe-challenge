
const DropDown = (props) => {
 
  return (
    <div className="d-flex align-items-center">
      <label className="fs-5 fw-400">{props.title}</label>
      <select className="form-select mx-2"  onChange={props.select}>
        {props.showAll ? <option>showAll</option> : null}
        {props.data.map((item, index) => (
          <option  value={item} key={index} >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;
