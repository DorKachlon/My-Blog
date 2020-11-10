import React from "react";
import "../styles/SingleComment.css";
import logo from "../styles/logo.png";

export default function SingleComment({ comment }) {
  return (
    <div className="singleCommentContainer">
      <img src={logo} alt="" />
      <div className="commentPaper">
        <div className="nameAndTime">
          <div>
            <b>{comment.name}</b>
          </div>
          <div>{comment.time}</div>
        </div>
        <>{comment.body}</>
      </div>
    </div>
  );
}
