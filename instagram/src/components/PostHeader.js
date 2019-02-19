import React from "react";

const PostHeader = props => {
    return (
        <div className="post-head">
            <img src={props.thumbnailURL} alt={props.username}/>
            <div>{props.username}</div>
        </div>
    )
}

export default PostHeader;