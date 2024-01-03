const mongoose = require("mongoose");

const GreenModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const GreenReview = mongoose.model("reviewsofgreen", GreenModel);
module.exports = GreenReview;
