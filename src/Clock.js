// @flow
import React from "react";


type ClockProps = {};
type ClockState = {
  date: Date
}

class Clock extends React.Component<ClockProps, ClockState> {
  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
  }

  componentWillMount() {
    //this.timerId = setInterval(() => this.tick(), 1000);
  }

  tick(){
    this.setState({date: new Date()})
  }

  shouldComponentUpdate(nextProps: ClockProps, nextState: ClockState){
    console.log("shouldComponentUpdate", nextState.date.toLocaleTimeString());
    return true;
  }
  componentWillUpdate(nextProps: ClockProps, nextState: ClockState){
    console.log("componentWillUpdate ", nextState.date.toLocaleTimeString());
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h3>{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default Clock;