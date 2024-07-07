import React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ChatPreview from "../components/ChatPreview";

const Index = () => {
  const [chats, setChats] = useState([]);

  const fetchMessages = () => {
    fetch("https://devapi.beyondchats.com/api/get_all_chats?page=1")
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data.data?.data)) {
          console.error("Unexpected data format:", data);
          return;
        }
        console.log(data.data.data);
        setChats(data.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12} lg={4}>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="All" value="1" />
                <Tab label="Regulars" value="2" />
                <Tab label="Unread" value="3" />
              </TabList>
            </Box>
            <TabPanel className="!p-0 !py-2" value="1">
              {chats.map((chat) => (
                <ChatPreview chat={chat} key={chat.id} />
              ))}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Grid2>
      <Grid2 xs={12} lg={8}></Grid2>
    </Grid2>
  );
};

export default Index;
