import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      email: '',
      phone: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { query, email, phone } = this.state;

    fetch('http://localhost:3000/alert', {
      method: 'POST',
      body: JSON.stringify({
        query, email, phone,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        alert('Your alert was successfully created!');
        res.json();
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>New Alert: </label>
          <input
            className="input-box"
            id="query-box"
            type="text"
            // value={this.state.query}
            onChange={event => this.setState({ query: event.target.value })}
            placeholder="Enter keyword to save as an alert (ie...`Venice PD`)"
          />
          <br />
          <label>Enter email @: </label>
          <input
            className="input-box"
            id="email-box"
            type="text"
            // value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="Enter keyword to save as an alert (ie...`Venice PD`)"
          />
          <br />
          <label>Enter phone #: </label>
          <input
            className="input-box"
            id="phoneNum-box"
            type="text"
            // value={this.state.phoneNum}
            onChange={event => this.setState({ phone: event.target.value })}
            placeholder="Enter keyword to save as an alert (ie...`Venice PD`)"
          />
          <br />
          <input type="submit" value="Set Alert" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
