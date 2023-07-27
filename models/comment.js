const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    video_id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
      unique: true,
    },
    username: { type: String, required: true },
    created_at: { type: Number, required: true },
    profile_pict: { type: Date, required: true },
    comment: { type: String, required: true },
  },
  { collection: "comment_list" }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
