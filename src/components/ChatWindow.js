import React, { useState } from "react";
import "./ChatWindow.css";

const ChatWindow = ({ user, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hello!", sender: "them" },
    { text: "Hi! How are you?", sender: "me" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "me" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>{user.name}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <p key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </p>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
