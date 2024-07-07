import React, { useState, useEffect } from "react";

function Chat({ id }) {
  const [chatMessages, setChatMessages] = useState([]);

  const fetchMessages = () => {
    fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setChatMessages(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      {chatMessages.map((message) => (
        <p key={message.id}>{message.message}</p>
      ))}
    </div>
  );
}

export default Chat;
