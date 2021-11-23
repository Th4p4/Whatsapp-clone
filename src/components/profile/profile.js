import React from "react";
import ChatList from "../chatlist/chatlist";
import Search from "../search/search";
import "./profile.scss"


const Profile = ()=>{
    return (
        <React.Fragment>
    <div className = "profile-section">
        <div className="image-container">
            <img alt="image" src = "https://otakukart.com/wp-content/uploads/2021/01/tokyo-1200x900.jpg" />
        </div>
        Sandip
        <div className="action-items">Logout</div>
    </div>
     <Search />
     <ChatList />
     </React.Fragment>
    );
}

export default Profile;