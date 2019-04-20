import React from "react";
import "../css/Sidebar.css";
import Search from "./Search";
import Group from "./Group";

const Sidebar = props => {
  return (
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
          <button
            className="btnAddList"
            onClick={() => {
              if (!document.getElementById("addList")) {
                let node = document.getElementById("group");
                let addList = document.createElement("input");
                addList.setAttribute("id", "addList");

                addList.onkeypress = () => {
                  let getAddListBox = document.getElementById("addList");

                  if (window.event.keyCode === 13) {
                    props.addHandle(getAddListBox.value);
                    console.log("Enter!!");
                    getAddListBox.remove();
                  } else if (window.event.keyCode === 27) {
                    getAddListBox.remove();
                  }
                };

                addList.onblur = () => {
                  let getAddListBox = document.getElementById("addList");

                  if (getAddListBox) {
                    if (!getAddListBox.value) {
                      getAddListBox.remove();
                    }
                  }
                };
                node.appendChild(addList);
                document.getElementById("addList").focus();
              }
            }}
          >
            {"추가"}
          </button>
        </div>
        <hr />
      </div>
      <Group entryList={props.list} handle={props.handle} />
    </div>
  );
};

export default Sidebar;
