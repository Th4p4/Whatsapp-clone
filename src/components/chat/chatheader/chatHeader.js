import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";


import "./chatHeader.scss"

const ChatHeader = ()=>{

    return  (
        <React.Fragment>
    <div className = "header-section">
        <div className="chat-image-container">
            <img alt="image" src = "https://otakukart.com/wp-content/uploads/2021/01/tokyo-1200x900.jpg" />
        </div>
        <div className = "chat-details">
            <h4 className ="title">
                User 1
            </h4>
            <p className ='chat-desc'>online</p>
        </div>
        <div className="action-items">
            <BsThreeDotsVertical />
        </div>
       
    </div>
     </React.Fragment>
    );
    }
    
    export default ChatHeader;