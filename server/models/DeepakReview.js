const mongoose = require("mongoose");

const deepakpgModel = new mongoose.Schema({
  comment: { type: String },
  rating: { type: Number},
  name:{type:String}
},{
    timestamps:true
}
);

const DeepakReview = mongoose.model("reviewsofdeepak", deepakpgModel);
module.exports = DeepakReview;
