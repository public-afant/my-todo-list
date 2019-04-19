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
      <div>
        {console.log("TodoList ::: ", props.listTodo)}
        {props.listTodo.map((data, idx) => (
          <ListEntry listEntry={data} key={idx} />
        ))}
      </div>
    );
  } else {
    return <div />;
  }
};

export default TodoList;
