const mongoose = require("mongoose");

const WhiteModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const WhiteReview = mongoose.model("reviewsofwhite", WhiteModel);
module.exports = WhiteReview;
