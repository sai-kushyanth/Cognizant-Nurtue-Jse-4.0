import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  // Multiple functions to bind to one event
  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  sayHello = () => {
    console.log("Hello! This is a static message.");
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayWelcome = (message) => {
    alert("Welcome message: " + message);
  }

  handleClick = (e) => {
    console.log(e); // This is a Synthetic Event
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Event Handling in React</h1>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome("Welcome to React Events!")}>
          Say Welcome
        </button>

        <br /><br />

        <button onClick={this.handleClick}>OnPress</button>

        <br /><br />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
