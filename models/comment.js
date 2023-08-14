const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Video" },
    username: { type: String, required: true },
    created_at: { type: Number, required: false },
    profile_pict: { type: Date, required: false },
    comment: { type: String, required: true },
  },
  { collection: "comment_list" }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
