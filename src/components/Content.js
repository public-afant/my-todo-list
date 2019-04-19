import React from "react";
import "../css/Content.css";
import TodoList from "./TodoList";

const Content = props => (
  <div className="content">
    {console.log("Content ::: ", props.entry)}
    <div className="top-title">
      <span className="list-title">{"🗓"} List Title</span>
      <button
        className="btnAddEntryList"
        type="button"
        onClick={() => {
          alert("Click!");
        }}
      >
        {"일정 추가"}
      </button>
    </div>

    <TodoList listTodo={props.entry} />
    {/* <hr className="hr_line" /> */}
  </div>
);

export default Content;
