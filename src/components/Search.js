import React from "react";
import "../css/Search.css";
const Search = props => (
  <div className="search_box">
    <input className="inputSearch" placeholder="Search..." />
    {/* <button
      className="btnSearch"
      type="button"
      onClick={e => {
        alert("Click Search Button!");
      }}
    >
      {"검색"}
    </button> */}
  </div>
);

export default Search;
