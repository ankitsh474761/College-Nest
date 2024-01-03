const mongoose = require("mongoose");

const chauhanpgModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const ChauhanReview = mongoose.model("reviewsofchauhan", chauhanpgModel);
module.exports = ChauhanReview;
