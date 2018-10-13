const Alert = require('./alertModel');

const alertController = {};

alertController.getAlerts = (req, res, next) => {
  Alert.find({}, (err, alerts) => {
    if (err) return res.status(500).json(err);
    res.locals.alerts = alerts;
    return next();
  })
}

module.exports = alertController;
