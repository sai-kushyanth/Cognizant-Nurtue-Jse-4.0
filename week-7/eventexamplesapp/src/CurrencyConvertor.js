import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euros: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = (this.state.rupees / 89.5).toFixed(2); // Example conversion rate
    this.setState({ euros: euroValue });
  }

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={this.state.rupees}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Convert</button>
        </form>

        {this.state.euros && (
          <p>€ {this.state.euros}</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
