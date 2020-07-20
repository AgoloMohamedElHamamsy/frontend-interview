// https://codesandbox.io/s/infallible-germain-rg238
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <button onClick={this.handleClick}>Counter {this.state.counter}</button>
    );
  }
}
