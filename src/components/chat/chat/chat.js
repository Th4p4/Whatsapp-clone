import React from "react";

import "./chat.scss";

const Chat = () => {
  return (
    <div className="chat-section">
      <div className="chat you">
        <span className="name">Sandip</span>
        <p className="msg"> This is a message.</p>
        <span className="time"> 10:32 AM</span>
      </div>
      <div className="chat me">
        <span className="name">Sandip</span>
        <p className="msg"> This is a message.</p>
        <span className="time"> 10:32 PM</span>
      </div>
    </div>
  );
};

export default Chat;
