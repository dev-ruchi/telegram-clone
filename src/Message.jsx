import React from "react";
import { useState, useEffect } from "react";

const Message = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = () => {
    fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (data && data.data) {
          setMessages(data.data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Chat Messages</h1>
      <ul>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((message) => (
            <li key={message.id}>
              <p>
                <strong>Message ID:</strong> {message.id}
              </p>
              <p>
                <strong>Sender:</strong>{" "}
                {message.sender.name
                  ? message.sender.name
                  : message.sender.email}
              </p>
              <p>
                <strong>Message:</strong> {message.message}
              </p>
              <p>
                <strong>Created At:</strong> {message.created_at}
              </p>
              <p>
                <strong>Updated At:</strong> {message.updated_at}
              </p>
            </li>
          ))
        ) : (
          <li>No messages found</li>
        )}
      </ul>
    </div>
  );
};

export default Message;
