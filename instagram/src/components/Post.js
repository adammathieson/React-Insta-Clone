import React from "react";
import PostHeader from "./PostHeader";
const Post = props => {
    return (
        <div className="post">
            <PostHeader 
                username={props.post.username}
                thumbnail={props.post.thumbnail}
            />
            <img 
                className="post-image"
                alt="post image"
                src={props.post.imageURL}
            />
        </div>
    )
}

export default Post;