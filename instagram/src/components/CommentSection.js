import React from "react";
import "./PostContainer.css";
import Comment from "./Comment";

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            commentText: ""
        };
    }
handleChanges = (e) => {
    this.setState({ commentText: e.target.value})
}

addNewComment = e => {
    e.preventDefault();
    const newComment = {
        username: "Adam",
        text: this.state.commentText
    }
    this.setState({
        comments: [...this.state.comments, newComment],
        commentText: ""
    })
}

    render() {
    return (
        <div className="comment-section">
            {this.state.comments.map((comment, i) =>
                <Comment
                    key={i}
                    comment={comment} />
                    )}
            <form onSubmit={this.addNewComment}>
                <input
                    type="text"
                    value={this.state.commentText}
                    name="Add comment"
                    onChange={this.handleChanges}
                    className="add-comment"
                    placeholder="Add a comment...">
                </input>
            </form>             
            
        </div>
    )
    }
}
export default CommentSection;

// clearLocalStorage = e => {
//     e.preventDefault();
//     localStorage.clear();
//     window.location.reload();
//   };