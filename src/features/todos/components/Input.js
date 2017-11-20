import React, { Component } from "react";

export default class Input extends Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: undefined
    };
  }
  addHandler() {
    if (this.props.onAdd) this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    });
  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  render() {
    return (
      <div>
        <input
          placeholder="Ajouter une tâche"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button onClick={this.addHandler}>
          <span>Ajouter</span>
        </button>
      </div>
    );
  }
}
