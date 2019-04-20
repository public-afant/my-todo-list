import React from "react";
import GroupEntry from "./GroupEntry";

// const Group = props => (
//   <div>
//     {console.log("Group ::::", props.entryList)}
//     {

//     }
// {/*
//     {props.entryList.map(data => (
//       <GroupEntry data={data} />
//     ))} */}
//   </div>
// );

const Group = props => {
  let listArray = Object.keys(props.entryList);

  return (
    <div className="groupCompo" id="group">
      {listArray.map((data, idx) => (
        <GroupEntry data={data} key={idx} handle={props.handle} />
      ))}
    </div>
  );
};

export default Group;
