import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target);
        }}
        >
          <input
            className="alert"
            type='text'
            // value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
          <input type="submit" value="Set Alert" />
        </form>
      </div>
    );
  }
}

export default SearchBar;
