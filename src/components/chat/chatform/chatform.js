import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";


import "./chatform.scss"

const ChatForm = () => {
  return (
    <React.Fragment>
      <div className="chat-form-section">
        <VscSmiley className="icon-smiley" />
        <AiOutlinePaperClip className="icon-paperclip" />
        <input placeholder="Message" />
        <MdOutlineKeyboardVoice className="icon-voice" />

      </div>
    </React.Fragment>
  );
};

export default ChatForm;
