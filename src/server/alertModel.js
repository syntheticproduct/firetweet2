const mongoose = require('mongoose');

const { Schema } = mongoose;

const alertSchema = new Schema({
  query: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model('Alert', alertSchema);
