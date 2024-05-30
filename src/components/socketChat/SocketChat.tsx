import React from "react";
import Button from "../button/Button";

import "./SocketChat.css";

const SocketChat = () => {
  return (
    <div>
      <div className="chatBar">
        <input className="inputChat" type="text" />
        <Button title="Send" color="blue"></Button>
      </div>
    </div>
  );
};

export default SocketChat;
