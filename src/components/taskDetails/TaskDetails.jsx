import React from "react";
import Bin from "./bin.svg";
import "./TaskDetails.css";

export default function TaskDetails(props) {
  function handleTaskChange(event) {
    props.editItem(props.index, event.target.value);
  }

  function handleCheckChange() {
    props.checkItem(props.index);
  }

  function handleTaskDelete() {
    props.deleteItem(props.index);
  }

  console.log(props);
  return (
    <div className="taskdetails-container">
      <input
        className="task-input"
        value={props.task.title}
        onChange={handleTaskChange}
      />
      <button className="bin-button" onClick={handleTaskDelete}>
        <img src={Bin} height="25" width="25" alt="" />
      </button>
      <input
        className="checked-button"
        type="checkbox"
        checked={props.task.checked}
        onClick={handleCheckChange}
      />
    </div>
  );
}
