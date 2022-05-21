import { useState } from "react";

const Menu = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <li >
      <div class="form-check">
        <input
          class="form-check-input"
          checked={checked}
          onChange={() => {
            props.check(props.data, checked);
            setChecked(!checked);
          }}
          type="checkbox"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          <h5>{props.data}</h5>
          <p className="text-secondary">{props.numOfLessons}Lessons</p>
        </label>
      </div>
    </li>
  );
};
export default Menu;
