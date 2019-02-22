import React from "react";

import {CommentDiv, UsernameP} from "./Styled/Styled";


const Comment = props => {
    return (
        <CommentDiv>
            <UsernameP>{props.comment.username}</UsernameP>
            <p className="text">{props.comment.text}</p>
        </CommentDiv>
    )
}

export default Comment;