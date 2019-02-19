import React from "react";
import Post from "./Post";

const PostContainer = props => {
    console.log(props);
    return (
        <div className="post-container">
            {props.posts.map(post => <Post key={post.imageURL} post={post} />)}
        </div>
    );
};
    

export default PostContainer;
