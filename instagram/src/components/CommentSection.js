import React from "react";
import "./PostContainer.css";

const CommentSection = props => {
console.log(props)
    return (
        <div className="comment-section">
            {props.comments.map(c => 
                <div className="comment-box">
                    <p className="username">{c.username}</p>
                    <p className="text">{c.text}</p>
                    {/* {id=c.imageUrl} */}
                </div>
                )}
                <input type="text" className="add-comment" placeholder="Add a comment..."></input>
        </div>
    )
}

export default CommentSection;