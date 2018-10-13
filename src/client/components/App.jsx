import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar.jsx';
// import TweetList from './tweetList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }

  }
  componentDidMount() {
    fetch('http://localhost:3000/tweets')
      .then((data) => {
        console.log('********', data);
        return data.json();
      })
      .then((data) => {
        console.log('$$$$$$$', data)
        this.setState({ tweets: data });
      })
  }

  render() {
    return (
      <div>
        <SearchBar />
        {/* <TweetList /> */}
      </div>
    )
  }
}

export default App;
