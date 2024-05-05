const mongoose = require("mongoose");

const veteranAskingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fullname: String,
    teamName: String,
    edition: Number,
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    link: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("VeteranAsking", veteranAskingSchema);
