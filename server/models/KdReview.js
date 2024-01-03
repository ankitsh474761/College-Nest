const mongoose = require("mongoose");

const kdModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const KdReview = mongoose.model("reviewsofkd", kdModel);
module.exports = KdReview;
