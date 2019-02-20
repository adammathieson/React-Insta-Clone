import React from "react";
import "./PostContainer.css";

const Comment = props => {
    return (
        <div className="comment-box">
            <p className="username">{props.comment.username}</p>
            <p className="text">{props.comment.text}</p>
    </div>
    )
}

export default Comment;