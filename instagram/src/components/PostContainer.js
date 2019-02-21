import React from "react";
import CommentSection from "./CommentSection";
import Post from "./Post";
import "./PostContainer.css";
// import PropTypes from 'prop-types';


const PostContainer = props => {
    return (
        <div className="post-container">
            <Post post={props.post}/>
            <CommentSection comments={props.post.comments}/>
        </div>
    );
};


    
// PostContainer.PropTypes = {
//     post: PropTypes.arrayOf(
//         PropTypes.shape({
//             username: PropTypes.string,
//             thumbnailUrl: PropTypes.string,
//             imageUrl: PropTypes.string,
//             likes: PropTypes.number
//         })
//     )
// }

export default PostContainer;
