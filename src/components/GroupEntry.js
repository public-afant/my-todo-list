import React from "react";
import "../css/GroupEntry.css";

const GroupEntry = props => (
  <div
    className="group_entry"
    onClick={e => {
      props.handle(e.target.innerText);
    }}
  >
    {props.data}
  </div>
);

export default GroupEntry;
