import React from "react";
import "./PostContainer.css";
import Comment from "./Comment";

const CommentSection = props => {
console.log(props)
    return (
        <div className="comment-section">
            {props.comments.map(comment => 
                <Comment 
                    key={Math.random().toString(36).replace('0.', '')} 
                    comment={comment} /> 
                    )}              
            <input type="text" className="add-comment" placeholder="Add a comment..."></input>
        </div>
    )
}

export default CommentSection;