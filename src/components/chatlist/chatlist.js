import React from "react";
import { BsChevronDown } from "react-icons/bs";

import "./chatlist.scss"

const ChatList = () => {
  return (
 
      <div className="card-list">
        <div className="card">
          <div className="image-container">
            <img
              alt="image"
              src="https://otakukart.com/wp-content/uploads/2021/01/tokyo-1200x900.jpg"
            />
          </div>
         <div className="card-detail">
             <h4 className="title">User 1</h4>
              <p className='desc'>Hello, how are you?</p>
          </div>
          <div className ="time">
              10:32 Am
          </div>
          <div className ="action-btn">
              <BsChevronDown />
          </div>
        </div>
      </div>
  
  );
};

export default ChatList;
