const mongoose = require("mongoose");

const parvatiModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const ParvatiReview = mongoose.model("reviewsofparvati", parvatiModel);
module.exports = ParvatiReview;
