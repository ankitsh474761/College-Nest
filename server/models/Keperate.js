const mongoose = require("mongoose");

const keperateModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const KeperateReview = mongoose.model("reviewsofkeperate", keperateModel);
module.exports = KeperateReview;
