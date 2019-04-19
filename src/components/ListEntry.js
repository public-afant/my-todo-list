import React from "react";
import "../css/ListEntry.css";

const ListEntry = props => (
  <div className="listEntry">
    {console.log("ListEntry ::: ", props.listEntry)}
    {/* <input type="radio" style={{ marginRight: "10px" }} /> */}
    {props.listEntry.entry}
  </div>
);

export default ListEntry;
