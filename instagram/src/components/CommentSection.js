import React from "react";

const CommentSection = props => {
console.log(props)
    return (
        <div className="comment-section">
            {props.comments.map(c => 
                <div className="comment-box">
                    <p><strong>{c.username}</strong> {c.text}</p>
                </div>
                )}
                <input type="text" className="add-comment" placeholder="Add a comment..."></input>
        </div>
    )
}

export default CommentSection;