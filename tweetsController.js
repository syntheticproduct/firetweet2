const tweetsController = {
  grabTweets(req, res) {
    console.log(req.query.search);
  },
};

module.exports = tweetsController;
