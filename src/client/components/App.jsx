import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar.jsx';
// import TweetList from './tweetList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: []
    };
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
      <div id="main-container">
        <h1>FireTweet</h1>
        <h3>Subscribe to an alert and be notified if it shows up on Twitter</h3>
        <SearchBar />
        {/* <TweetList /> */}
      </div>
    )
  }
}

export default App;
