import React from "react";
import Chat from "./chat/chat";
import ChatForm from "./chatform/chatform";

import ChatHeader from "./chatheader/chatHeader";


const ChatComponent = ()=>{
return <React.Fragment>
    <ChatHeader />
    <Chat />
    <ChatForm />
    </React.Fragment>

}

export default ChatComponent;