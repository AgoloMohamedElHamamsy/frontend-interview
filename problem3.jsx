// https://codesandbox.io/s/vigorous-yonath-u06vs
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
