const mongoose = require("mongoose");

const adminData = new mongoose.Schema({
  email: { type: String },
  password: { type: String },
});

const Admin  = mongoose.model("admindatas", adminData);
module.exports = Admin;
