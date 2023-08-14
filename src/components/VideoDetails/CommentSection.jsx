import React from "react";

const CommentSection = ({ comments }) => {
  return (
    <ul className="column comment-section" style={{ gap: "20px" }}>
      {comments.map((comment) => (
        <li key={comment._id} style={{ listStyle: "none" }}>
          <span style={{ fontWeight: "bold" }}>{comment.username}: </span>
          {comment.comment}
        </li>
      ))}
    </ul>
  );
};

export default CommentSection;
