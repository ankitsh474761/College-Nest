const mongoose = require("mongoose");

const cdModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const CdReview = mongoose.model("reviewsofcd", cdModel);
module.exports = CdReview;
