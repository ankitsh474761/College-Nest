const mongoose = require("mongoose");

const suvidhapgModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const SuvidhaReview = mongoose.model("reviewsofsuvidha", suvidhapgModel);
module.exports = SuvidhaReview;
