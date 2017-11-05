// @flow
import React, { Component } from "react";
import "./App.css";

type HelloProps = {
  name?: string
};

function Hello(props: HelloProps) {
  return <div>Counter: {props.value}</div>;
}

Hello.defaultProps = {
  name: "React"
};

class App extends Component<{}> {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    this.setState({
      count: this.state.count +1,
    })
  }
  render() {
    return (
      <div>
        <Hello value={this.state.count} />
        <button onClick={this.onButtonClick}>Click</button>
      </div>
    );
  }
}
export default App;