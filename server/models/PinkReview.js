const mongoose = require("mongoose");

const pinkModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const PinkReview = mongoose.model("reviewsofpink", pinkModel);
module.exports = PinkReview;
