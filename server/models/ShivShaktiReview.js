const mongoose = require("mongoose");

const shivshaktipgModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const ShivShaktiReview = mongoose.model("reviewsofshivshakti", shivshaktipgModel);
module.exports = ShivShaktiReview;
