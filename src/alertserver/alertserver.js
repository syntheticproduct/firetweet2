const express = require('express');
const bodyParser = require('body-parser');
const fetch =  require('node-fetch');
const nodemailer = require('nodemailer');
const config = require('./TwitterConfig')
const Twitter = require('twitter-node-client').Twitter;
const twitter = new Twitter(config);

const PORT = 4000;
const alertInterval = 5000 // milliseconds

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'firetweetcs24@gmail.com',
      pass: 'goblinshark'
    }
  });

// repeat with the interval of 2 seconds
// runalerts()

let timerId = setInterval(() => runalerts(), alertInterval);

function runalerts() {
    //get all alerts
    //run all alerts against twitter
        // search twitter
        // if hit(send email + sms)
        fetch('http://localhost:3000/alerts')
            .then(res => res.text())
            .then(body => handleAlerts(body));
        }

function handleAlerts(alerts){
    console.log("Handle these alerts:", JSON.stringify(JSON.parse(alerts), null, 2));
    ///////// TO DO - call searchTwitter for each alert!
    SearchTwitter('codesmith venice beach') /////// HARDCODED for now!
}

function SearchTwitter(query){
    console.log('Searching Twitter for: \'' + query + '\'');
    twitter.getSearch({'q':query,'count': 10}, error, data => sendAlert(data));
}

var error = function (err, response, body) {
    console.log('Error on Search Twitter', JSON.stringify(JSON.parse(err), null, 2));
};

var sendAlert = function (data) {
    twitterResult = JSON.parse(data);
    console.log('Twitter got back with: ', JSON.stringify(twitterResult, null, 2));
    let noTweets = twitterResult["statuses"].length; 
    if (noTweets === 0) 
        {
            console.log('No tweets found');
            return;
        }
    //let firstTweet = twitterResult["statuses"][0];
    var mailOptions = {
        from: 'firetweetcs24@gmail.com',
        ////////// TO DO - set to Alert email!!!!!!
        to: 'camille.lambert@gmail.com',
        subject: 'FireTweet Alert! ' + noTweets + ' tweet(s) found for alert!'
        text: 'That was easy!' // TOTO add link to Tweet found
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
    ////////// TO DO - PAUSE the Alert for 24h !!!!!!
};


