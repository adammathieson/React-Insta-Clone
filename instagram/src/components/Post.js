import React from "react";

import like from "./Images/like.png";
import chat from "./Images/chat.png";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.post,
            likes: props.post.likes
        }
}
    incrementLike = () => {
        this.setState({ likes: this.state.likes + 1 })
        }
    

    render() {
        return (
            <div className="post-con">
                <div className="post-con-header">
                    <img className="thumbnail" alt="thumbnail" src={this.state.posts.thumbnailUrl}></img>
                    <h2>{this.state.posts.username}</h2>
                </div>
                <img alt="post" src={this.state.posts.imageUrl}></img>
                <div className="actions">
                    <img alt="like icon" className="action-icon" src={like} onClick={this.incrementLike}></img>
                    <img alt="chat icon" className="action-icon" src={chat}></img>
                </div>
                <div className="likes">{this.state.likes} likes</div>
            </div>
        )
    }
}

export default Post;