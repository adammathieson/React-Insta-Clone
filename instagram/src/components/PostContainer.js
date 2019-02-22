import React from "react";

import {PostWrapper} from "./Styled/Styled";
import CommentSection from "./CommentSection";
import Post from "./Post";


// import PropTypes from 'prop-types';


const PostContainer = props => {
    return (
        <PostWrapper>
            <Post post={props.post}/>
            <CommentSection comments={props.post.comments}/>
        </PostWrapper>
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
