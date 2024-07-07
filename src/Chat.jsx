import React, { useState, useEffect } from "react";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchData = () => {
    fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (data && data.data && data.data.data) {
          setChats(data.data.data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })

      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Chat List</h1>
      <ul>
        {chats.map((chat) => (
          <li key={chat.id}>
            <p>
              <strong>ID:</strong> {chat.id}
            </p>
            <p>
              <strong>Status:</strong> {chat.status}
            </p>
            <p>
              <strong>Created At:</strong> {chat.created_at}
            </p>
            <p>
              <strong>Updated At:</strong> {chat.updated_at}
            </p>
            <p>
              <strong>Message Count:</strong> {chat.msg_count}
            </p>
            {chat.creator && (
              <>
                <p>
                  <strong>Creator:</strong>{" "}
                  {chat.creator.name ? chat.creator.name : chat.creator.email}
                </p>
                <p>
                  <strong>City:</strong> {chat.creator.city}
                </p>
                <p>
                  <strong>Country:</strong> {chat.creator.country.name}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Chat;
