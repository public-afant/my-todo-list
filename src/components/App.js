import React, { Component } from "react";
import "../css/App.css";
import Sidebar from "./Sidebar";
import Content from "./Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side_lists: null,
      selectList: null,
      selectedList: null
    };
  }

  componentDidMount = () => {
    // console.log(this.props.data);
    this.setState({
      side_lists: this.props.data
    });
  };

  onClickList = getList => {
    this.setState({
      selectList: this.props.data[getList],
      selectedList: getList
    });
  };

  onClickEntry = (getList, getEntty) => {
    // console.log("getLIst :: ", getList, "  getEntry :: ", getEntty);
    console.log(this.props.data[getList]);
    let entryArray = this.props.data[getList];

    for (let i in entryArray) {
      if (entryArray[i].entry === getEntty) {
        entryArray.splice(i, 1);
      }
      // console.log(entryArray[i].entry);
    }
    this.setState({});
  };

  addListHandle = newList => {
    this.props.data[newList] = [];
    this.setState({
      side_lists: this.props.data
    });
  };

  addEntryHandle = (getList, newEntry) => {
    let addEntry = {
      entry: newEntry
    };
    this.props.data[getList].push(addEntry);
    console.log(this.props.data);
    this.setState({});
  };

  render() {
    if (this.state.side_lists) {
      return (
        <div className="App">
          <Sidebar
            list={this.state.side_lists}
            handle={this.onClickList}
            addHandle={this.addListHandle}
          />
          <Content
            entry={this.state.selectList}
            selected={this.state.selectedList}
            addEntryHandle={this.addEntryHandle}
            handle={this.onClickEntry}
          />
        </div>
      );
    } else {
      return <div>Loding....</div>;
    }
  }
}

export default App;
