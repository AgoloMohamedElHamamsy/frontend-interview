// https://codesandbox.io/s/infallible-germain-rg238
import React from "react";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handleCounter() {}

  render() {
    return (
      <button onClick={this.handleCounter}>Counter {this.state.counter}</button>
    );
  }
}
