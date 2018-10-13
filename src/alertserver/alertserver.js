const express = require('express');
const bodyParser = require('body-parser');
const config = require('./TwitterConfig')
var Twitter = require('twitter-node-client').Twitter;

var twitter = new Twitter(config);

const PORT = 4000;
const alertInterval = 2000 // milliseconds

// repeat with the interval of 2 seconds
let timerId = setInterval(() => runalerts(), alertInterval);

function runalerts() {
    //get all alerts
    //run all alerts against twitter
        // search twitter
        // if hit(send email + sms)
    twitter.getSearch({'q':'codesmith venice beach','count': 10}, error, success);

    console.log("alert ran");
}

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', JSON.stringify(data));
};
