import React from "react";
import Cup from "../cup/Cup";
import "./Chat.css";

const Chat = () => {
  return (
    <div className="chat-section">
      <h1 style={{ color: "#121e27" }}>Let's have a chat</h1>
      <div className="chat-container">
        <div className="info-section">
          <a href="mailto:bhattarainisha11@gmail.com">
            bhattarainisha11@gmail.com
          </a>
          <button>Get In Touch</button>
        </div>
        <div>
          <Cup />
        </div>
      </div>
    </div>
  );
};

export default Chat;
