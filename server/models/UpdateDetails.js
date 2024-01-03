const mongoose = require("mongoose");

const updateModel = new mongoose.Schema({
  rentG: { type: Number},
  rentB: {type:Number},
  rooms: { type: Number},
  vacant : {type : Number},
  email : {type : String},
  accomodation : {type : String},

});

const UpdateDetails = mongoose.model("updatedetails", updateModel);
module.exports = UpdateDetails;


// login time (store email of admin in local storage )
// then use this email in update section of form and send this email in update end point and then check this email 