import React from "react";
import "../css/ListEntry.css";

const ListEntry = props => (
  <div
    className="listEntry"
    onClick={e => {
      props.handle(props.title, e.target.innerText);
    }}
  >
    {props.listEntry.entry}
  </div>
);

export default ListEntry;
