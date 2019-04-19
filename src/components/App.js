import React, { Component } from "react";
import "../css/App.css";
import Sidebar from "./Sidebar";
import Content from "./Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side_lists: null,
      selectList: null
    };
  }

  componentDidMount = () => {
    console.log(this.props.data);
    this.setState({
      side_lists: this.props.data
    });
  };

  onClickList = getList => {
    this.setState({
      selectList: this.props.data[getList]
    });
  };

  render() {
    if (this.state.side_lists) {
      return (
        <div className="App">
          <Sidebar list={this.state.side_lists} handle={this.onClickList} />
          <Content entry={this.state.selectList} />
        </div>
      );
    } else {
      return <div>Loding....</div>;
    }
  }
}

export default App;
