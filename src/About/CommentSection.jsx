import React from "react";
import stl from "./index.module.scss";
import { comments } from "./components/data";
import { CommentCards } from "./components/CommentCards";

export function CommentSection() {
  return (
    <div className={stl.commentSection}>
      <h2>Comment from users</h2>

      <div className={stl.commentCardsContainer}>
        {comments.map((comment, index) => (
          <CommentCards nickname={comment.nickname} comment={comment.comment} />
        ))}
      </div>
    </div>
  );
}
