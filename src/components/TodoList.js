/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ListEntry from "./ListEntry";

// const TodoList = props => (
//   <div>
//     {console.log("TodoList ::: ", props.listTodo)}

//     {
//       if(props.listTodo){

//       }
//     //   props.listTodo.map(data => {
//     //   console.log("mapData :::", data);
//     // })

//     }
//     <ListEntry />
//   </div>
// );

const TodoList = props => {
  if (props.listTodo !== null) {
    return (
      <div className="todoList">
        {console.log("TodoList ::: ", props.listTodo)}
        {props.listTodo.map((data, idx) => (
          <ListEntry listEntry={data} key={idx} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="list_null">
        <div className="waring_null">{"목록을 먼저 선택해주세요."}</div>
      </div>
    );
  }
};

export default TodoList;
