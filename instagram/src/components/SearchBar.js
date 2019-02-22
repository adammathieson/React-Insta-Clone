import React from "react";


import {WrapperDiv, LogoBoxDiv, IconBoxDiv, Input, ImgLogo, ImgIcon} from "./Styled/Styled";

import instagramCam from "./Images/instagram.png";
import instagramLogo from "./Images/Instagram-logo-png-text.png";
import compass from "./Images/compass.png";
import like from "./Images/like.png";
import user from "./Images/user.png";



class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.data.username,
            search: ""
        }
    }

handleChanges = (e) => {
    this.setState({ search: e.target.value })
}



    render() {
        return (
            <WrapperDiv>
                <LogoBoxDiv>
                    <ImgLogo alt="instagram camera logo" src={instagramCam}></ImgLogo>
                    <ImgLogo alt="instagram name logo" src={instagramLogo}></ImgLogo>
                </LogoBoxDiv>
                <form onSubmit={ e => this.props.filterSearch(e, this.state.search)}>
                    <Input 
                        type="text" 
                        className="search-bar" 
                        placeholder="Search"
                        value={this.state.search}
                        onChange={this.handleChanges}>
                    </Input>
                </form>
                <IconBoxDiv>
                    <ImgIcon alt="compass icon" src={compass}></ImgIcon>
                    <ImgIcon alt="like icon" src={like}></ImgIcon>
                    <ImgIcon alt="user icon" src={user}></ImgIcon>
                </IconBoxDiv>
            </WrapperDiv>

            
        )
    }
}



export default SearchBar