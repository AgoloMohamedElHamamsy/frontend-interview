class Component extends React.Componenet {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // ...
  }

  render() {
    return <button onClick={this.handleClick}>{"Click me"}</button>;
  }
}
