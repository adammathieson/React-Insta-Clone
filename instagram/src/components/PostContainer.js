import React from "react";
import CommentSection from "./CommentSection";
import "./PostContainer.css";
// import PropTypes from 'prop-types';

import like from "./Images/like.png";
import chat from "./Images/chat.png";



const PostContainer = props => {
    return (
        <div className="post-container">
            <div className="post-con-header">
                <img className="thumbnail" alt="thumbnail" src={props.post.thumbnailUrl}></img>
                <h2>{props.post.username}</h2>
            </div>
            <img alt="post" src={props.post.imageUrl}></img>
            <div className="actions">
                <img alt="like icon" className="action-icon" src={like} onClick={this.addLike}></img>
                <img alt="chat icon" className="action-icon" src={chat}></img>
            </div>
            <div className="likes">{props.post.likes} likes</div>
            <CommentSection comments={props.post.comments}/>
        </div>
    );
};

addLike = e => {
    e.preventDefault();
    const prevLikes = this.props.post.likes;
    const newLikes = prevLikes + 1;
    
}
    
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
