import React from "react";
import "../css/Sidebar.css";
import Search from "./Search";
import Group from "./Group";
const Sidebar = props => (
  <div className="sidebar">
    {console.log("Sidebar :::: ", props)}
    <div className="title">
      <span>{"🙏"} AFANT's Todo List</span>
      <hr />
    </div>

    <Search />
    <div className="divSidebar">
      <div className="divSidebar-top">
        <span className="divTitle">{"👉 목록 보기"}</span>
        <button className="btnAddList">{"추가"}</button>
      </div>
      <hr />
    </div>
    <Group entryList={props.list} handle={props.handle} />
  </div>
);

export default Sidebar;
