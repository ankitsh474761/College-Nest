const mongoose = require("mongoose");

const IbydeneModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);
const IbydeneReview = mongoose.model("reviewsofibydene", IbydeneModel);
module.exports = IbydeneReview;
