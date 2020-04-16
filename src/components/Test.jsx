import React, { Component } from "react";

class Test extends Component {
  state = {
    num: 10,
    name: "Darshan"
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h2 className="jumbotron text-center">Welcome to Test Page</h2>

          <h3>{this.state.num}</h3>
          <h4>{this.state.name}</h4>
          <h5>{this.props.title}</h5>
          <h5>{this.props.isRequired}</h5>
          <h5>{this.props.value}</h5>
          <ul>
            {this.props.userInfo.map(x => {
              return <li> {x} </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Test;
