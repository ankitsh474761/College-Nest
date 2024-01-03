const mongoose = require("mongoose");

const thakurpgModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const ThakurReview = mongoose.model("reviewsofthakur", thakurpgModel);
module.exports = ThakurReview;
