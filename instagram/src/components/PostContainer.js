import React from "react";

function PostContainer(props) {
    console.log(props);
    return (
        <div>
            {props.data.map(post => (post))}
        </div>
    )
}
    

export default PostContainer;
