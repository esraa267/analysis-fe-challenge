
const DropDown = (props) => {
 
  return (
    <div>
      <label >{props.title}</label>
      <select className="form-select"  onChange={props.select}>
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
