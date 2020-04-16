import React, { Component } from "react";
import "./styles.css";
import Test from "./components/Test";

export default class App extends Component {
  state = {
    value: 100,
    users: ["user1", "user2", "user3"],
    obj: {
      obname: "default object"
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>

        <Test
          title="newname"
          isRequired="Yes"
          value={this.state.value}
          userInfo={this.state.users}
          objInfo={this.state.obj}
        />
      </div>
    );
  }
}
