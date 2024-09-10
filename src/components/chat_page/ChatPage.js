import React from 'react';
import { Box } from '@mui/material';
import SidebarLeft from './SidebarLeft';
import ChatInterface from './ChatInterface';
import SidebarRight from './SidebarRight';
import './ChatPage.css';  // Importing the CSS file

const ChatPage = () => {
  return (
    <Box className="app-container">
      <div className='second-container'>
      <Box className="sidebar-left-div">
        <SidebarLeft />
      </Box>
      <Box className="chat-interface-div">
        <ChatInterface />
      </Box>
      <Box className="sidebar-right-div">
        <SidebarRight />
      </Box>
      </div>
    </Box>
  );
};

export default ChatPage;
