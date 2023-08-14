const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    video_id: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
    username: { type: String, required: true },
    created_at: { type: Date, default: Date.now },

    comment: { type: String, required: true },
  },
  { collection: "comment_list" }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
