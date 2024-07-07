import React, { useState, useEffect } from "react";
import Message from "./Message";

function Chat({ id }) {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
      .then((res) => res.json())
      .then((res) => {
        setMessages(res.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchMessages();
  }, [id]);

  return (
    <div className="p-4 h-screen overflow-y-scroll">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
    </div>
  );
}

export default Chat;
