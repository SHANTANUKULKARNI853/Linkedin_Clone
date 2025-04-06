import React, { useState, useEffect, useRef } from "react";
import "./Messages.css";
import { FaSearch, FaPaperPlane } from "react-icons/fa";

const Messages = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  // Fetch dynamic contacts
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then((res) => res.json())
      .then((data) => {
        const formattedContacts = data.results.map((user, index) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          lastMessage: "Hey there! Let's connect!",
          avatar: user.picture.thumbnail,
        }));
        setContacts(formattedContacts);
      });
  }, []);

  // Scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages[selectedChat?.id]]);

  const handleSendMessage = () => {
    if (!selectedChat || newMessage.trim() === "") return;
  
    const chatMessages = messages[selectedChat.id] || [];
    const updatedMessages = [
      ...chatMessages,
      { text: newMessage, sender: "me" },
    ];
  
    setMessages({
      ...messages,
      [selectedChat.id]: updatedMessages,
    });
  
    const userMessage = newMessage.toLowerCase();
    setNewMessage("");
  
    // Simulated bot response
    setTimeout(() => {
      const botReply = getBotResponse(userMessage);
      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedChat.id]: [...updatedMessages, { text: botReply, sender: "bot" }],
      }));
    }, 1000); // 1 second delay
  };
  const getBotResponse = (message) => {
    const msg = message.trim().toLowerCase();
  
    const greetings = ["hi", "hello", "hey", "good morning", "good evening"];
    const howAreYou = ["how are you", "how's it going", "what's up"];
    const goodbyes = ["bye", "goodbye", "see you", "take care"];
    const thanks = ["thanks", "thank you", "thx"];
    const help = ["help", "assist", "support", "guidance"];
    const jobQueries = ["job", "opening", "position", "apply", "career"];
    const time = ["time", "current time", "what time"];
  
    const contains = (arr) => arr.some((phrase) => msg.includes(phrase));
  
    // Handle different cases
    if (contains(greetings)) {
      const responses = [
        "Hey there! 👋",
        "Hello! Hope you're having a great day!",
        "Hi! How can I assist you today?",
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
  
    if (contains(howAreYou)) {
      return "I'm just a bot, but I'm doing great! 😄 How about you?";
    }
  
    if (contains(goodbyes)) {
      return "Goodbye! Feel free to reach out if you need anything. 😊";
    }
  
    if (contains(thanks)) {
      return "You're most welcome! 🤝";
    }
  
    if (contains(help)) {
      return "Sure! I can help you with job searches, connections, or app support. What would you like help with?";
    }
  
    if (contains(jobQueries)) {
      return "Looking for a job? Check out the 'Jobs' page for the latest openings tailored just for you!";
    }
  
    if (contains(time)) {
      const now = new Date().toLocaleTimeString();
      return `The current time is ${now}. 🕒`;
    }
  
    return `🤖 I'm still learning! Try asking about jobs, time, or say "hi".`;
  };
  
  

  return (
    <div className="messages-page">
      {/* Left Sidebar - Contacts */}
      <div className="chat-sidebar">
        <h3>Messaging</h3>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search messages" />
        </div>
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => setSelectedChat(contact)}
              className={selectedChat?.id === contact.id ? "active" : ""}
            >
              <img src={contact.avatar} alt="avatar" className="contact-avatar" />
              <div>
                <span>{contact.name}</span>
                <p>{contact.lastMessage}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Chat Window */}
      <div className="chat-window">
        {selectedChat ? (
          <>
            <div className="chat-header">{selectedChat.name}</div>

            <div className="chat-messages">
              {(messages[selectedChat.id] || []).map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef}></div>
            </div>

            <div className="chat-input">
              <input
                type="text"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button onClick={handleSendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <p className="no-chat">Select a conversation to start messaging.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
