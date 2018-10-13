const express = require('express');
const bodyParser = require('body-parser');

const PORT = 4000;
const interval = 2000 // milliseconds

function runalerts() {
    twitter.getSearch({'q':'codesmith venice beach','count': 10}, error, success);
    console.log("alert ran");
}

// repeat with the interval of 2 seconds
let timerId = setInterval(() => runalerts(), 2000);

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', JSON.stringify(data));
};

//Get this data from your twitter apps dashboard


var twitter = new Twitter(config);
// make a directory in the root folder of your project called data
// copy the node_modules/twitter-node-client/twitter_config file over into data/twitter_config`
// Open `data/twitter_config` and supply your applications `consumerKey`, 'consumerSecret', 'accessToken', 'accessTokenSecret', 'callBackUrl' to the appropriate fields in your data/twitter_config file

//Example calls
// twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
// twitter.getMentionsTimeline({ count: '10'}, error, success);
// twitter.getHomeTimeline({ count: '10'}, error, success);
// twitter.getReTweetsOfMe({ count: '10'}, error, success);
// twitter.getTweet({ id: '1111111111'}, error, success);


//
// Get 10 tweets containing the hashtag haiku
//
