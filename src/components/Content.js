import React from "react";
import "../css/Content.css";
import TodoList from "./TodoList";

const Content = props => {
  let title = props.selected;
  if (props.selected === null) {
    title = "";
  }

  return (
    <div className="content">
      {console.log("Content ::: ", props.entry)}
      <div className="top-title">
        <span className="list-title">{`🗓 ${title}`}</span>
        <button
          className="btnAddEntryList"
          type="button"
          onClick={() => {
            if (props.entry === null) {
              alert("먼저 리스트를 선택하세요.");
            } else {
              if (!document.getElementById("addEntry")) {
                let node = document.querySelector(".todoList");
                let addEntry = document.createElement("input");
                addEntry.setAttribute("id", "addEntry");

                addEntry.onkeypress = () => {
                  let getAddEntryBox = document.getElementById("addEntry");

                  if (window.event.keyCode === 13) {
                    props.addEntryHandle(title, getAddEntryBox.value);
                    getAddEntryBox.remove();
                  } else if (window.event.keyCode === 27) {
                    getAddEntryBox.remove();
                  }
                };
                addEntry.onblur = () => {
                  let getAddEntryBox = document.getElementById("addEntry");

                  if (getAddEntryBox) {
                    if (!getAddEntryBox.value) {
                      getAddEntryBox.remove();
                    }
                  }
                };

                node.appendChild(addEntry);
                document.getElementById("addEntry").focus();
              }
            }
          }}
        >
          {"일정 추가"}
        </button>
      </div>

      <TodoList listTodo={props.entry} />
      {/* <hr className="hr_line" /> */}
    </div>
  );
};

export default Content;
