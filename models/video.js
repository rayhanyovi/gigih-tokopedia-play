const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    video_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
      unique: true,
    },
    thumbnail_url: { type: String, required: true },
    title: { type: String, required: true },
    shop: { type: String, required: true },
    promo_id: { type: String, required: true },
  },
  { collection: "video_list" }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
