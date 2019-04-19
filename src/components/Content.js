import React from "react";
import "../css/Content.css";

const Content = props => (
  <div className="content">
    <div className="top-title">
      <span className="title">AFANT's Todo List</span>
      <button
        className="btn_addList"
        type="button"
        onClick={() => {
          alert("Click!");
        }}
      >
        {"Add to List"}
      </button>
    </div>

    <p>Content!!!!</p>
  </div>
);

export default Content;
