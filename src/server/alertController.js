const Alert = require('./alertModel');

const alertController = {};

alertController.getAlerts = (req, res, next) => {
  Alert.find({}, (err, alerts) => {
    if (err) return res.status(500).json(err);
    res.locals.alerts = alerts;
    return next();
  });
}

alertController.postAlert = (req, res, next) => {
  const { query, email, phone } = req.body;
  Alert.create({ query, email, phone }, (err, newAlert) => {
    if (err) return res.status(500).json(err);
    res.locals.newAlert = newAlert;
    return next();
  });
}

alertController.deleteAlert = (req, res, next) => {
  console.log(req.body.id);
  Alert.remove({ _id: req.body.id }, (err) => {
    if (err) return res.status(500).json(err);
    return next();
  })
}

module.exports = alertController;
