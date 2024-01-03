const mongoose = require('mongoose');

const authModel  = new mongoose.Schema({
  name: { type: String },
  email: { type: String }
});

const Loginauth = mongoose.model("users",authModel);
module.exports = Loginauth;
