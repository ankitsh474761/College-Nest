const mongoose = require("mongoose");

const sharmapgModel = new mongoose.Schema(
  {
    comment: { type: String },
    rating: { type: Number },
    name: { type: String },
  },
  {
    timestamps: true,
  }
);

const SharmaReview = mongoose.model("reviewsofsharma", sharmapgModel);
module.exports = SharmaReview;
