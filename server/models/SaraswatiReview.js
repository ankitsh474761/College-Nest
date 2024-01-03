const mongoose = require("mongoose");

const saraswatiModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const SaraswatiReview = mongoose.model("reviewsofsaraswati", saraswatiModel);
module.exports = SaraswatiReview;
