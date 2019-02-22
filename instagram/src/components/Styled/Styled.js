import styled from 'styled-components';

// SeachBar
export const WrapperDiv = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    max-height: 80px;
    border-bottom: 1px solid gray;
`;

export const LogoBoxDiv = styled.div`
    max-width: 33%;
    justify-content: flex-start;
`;

export const Input = styled.input`
    max-height: 30px;
    justify-content: center;
    align-self: center;
`;

export const IconBoxDiv = styled.div`
    display: flex;
    width: 25%;
    justify-content: space-evenly;
    align-items: center;
`;

export const ImgLogo = styled.img`
    max-height: 30px;
    max-width: 30px;
`;

export const ImgIcon = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const PostWrapper = styled.div`
    border: 1px solid lightgrey;
    max-width: 640px;
    margin-top: 50px;
`;

export const PostHeader = styled.div`
    display: flex;
    max-height: 60px;
    width: 66%;
    padding: 20px;
`;

export const Thumbnail = styled.img`
    border-radius: 50%;
    height: 30px;
    width: 30px; 
`;

export const UserH2 = styled.h2`
    font-size: 1.35rem;
    padding-left: 20px;
    align-self: center;
`;

export const ActionsDiv = styled.div`
    display: flex;
    max-height: 50px;
`;

export const ActionIcon = styled.img`
    height: 30px;
    width: 30px;
    padding: 10px;
`;

export const LikesDiv = styled.div`
    padding-left: 10px;
`;

// /CommentSection.js

export const AddCommentInput = styled.input`
    width: 90%;
    border: none;
    border-top: 1px solid lightgrey;
    height: 50px;
    align-self: center;
    font-size: 1rem;
    padding-left: 10px;
`;

// Comment.js

export const CommentDiv = styled.div`
    display: flex;
    padding: 5px 10px;
`;

export const UsernameP = styled.p`
    font-weight: 600;
    padding-right: 5px;
`;
