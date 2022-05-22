import { useState } from "react";
import { useDispatch } from "react-redux";
import { FilterSchools } from "../../store/action";

const Menu = (props) => {
 const dispatch= useDispatch();
  return (
    <li >
      <div className="form-check">
        <input
          className="form-check-input"
          checked={props.checked}
          onChange={() =>dispatch(FilterSchools(props.index)) }
          type="checkbox"
        />
        <label className="form-check-label">
          <p className="fs-sm-4">{props.data}</p>
          <p className="text-secondary">{props.numOfLessons}Lessons</p>
        </label>
      </div>
    </li>
  );
};
export default Menu;
