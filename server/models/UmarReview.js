const mongoose = require("mongoose");

const umarModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const UmarReview = mongoose.model("reviewsofumar", umarModel);
module.exports = UmarReview;
