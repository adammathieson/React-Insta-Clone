import React from "react";
import CommentSection from "./CommentSection";
import "./PostContainer.css";

import like from "./Images/like.png";
import chat from "./Images/chat.png";

const PostContainer = props => {
    console.log(props);
    return (
        <div className="post-container">
            <div className="post-con-header">
                <img className="thumbnail" alt="thumbnail image" src={props.post.thumbnailUrl}></img>
                <h2>{props.post.username}</h2>
            </div>
            <img alt="post image" src={props.post.imageUrl}></img>
            <div className="actions">
                <img className="action-icon" src={like}></img>
                <img className="action-icon" src={chat}></img>
            </div>
            <CommentSection comments={props.post.comments}/>
        </div>
    );
};
    

export default PostContainer;
