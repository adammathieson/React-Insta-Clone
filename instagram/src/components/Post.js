import React from "react";

import {PostHeader, Thumbnail, UserH2, ActionsDiv, ActionIcon, LikesDiv} from "./Styled/Styled";

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
            <div>
                <PostHeader>
                    <Thumbnail alt="thumbnail" src={this.state.posts.thumbnailUrl}></Thumbnail>
                    <UserH2>{this.state.posts.username}</UserH2>
                </PostHeader>
                <img alt="post" src={this.state.posts.imageUrl}></img>
                <ActionsDiv>
                    <ActionIcon alt="like icon" src={like} onClick={this.incrementLike}></ActionIcon>
                    <ActionIcon alt="chat icon" src={chat}></ActionIcon>
                </ActionsDiv>
                <LikesDiv>{this.state.likes} likes</LikesDiv>
            </div>
        )
    }
}

export default Post;