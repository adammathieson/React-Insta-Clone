import React from "react";
import instagramCam from "./Images/instagram.png";
import instagramLogo from "./Images/Instagram-logo-png-text.png";
import compass from "./Images/compass.png";
import like from "./Images/like.png";
import user from "./Images/user.png";
import "./SearchBar.css";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: props.data.username,
            search: ""
        }
    }
    
    render() {
        return (
            <div className="search-bar-container">
                <div className="logos-box">
                    <img className="logos-item" alt="instagram camera logo" src={instagramCam}></img>
                    <img className="logos-item" alt="instagram name logo" src={instagramLogo}></img>
                </div>
                <input type="search" className="search-bar" placeholder="Search"></input>
                <div className="icons-box">
                    <img className="icon" alt="compass icon" src={compass}></img>
                    <img className="icon" alt="like icon" src={like}></img>
                    <img className="icon" alt="user icon" src={user}></img>
                </div>
            </div>
        )
    }
}

export default SearchBar