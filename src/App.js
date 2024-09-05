import React from 'react';
import { Box } from '@mui/material';
import SidebarLeft from './components/SidebarLeft';
import ChatInterface from './components/ChatInterface';
import SidebarRight from './components/SidebarRight';
import './App.css';  // Importing the CSS file

const App = () => {
  return (
    <Box className="app-container">
      <Box className="sidebar-left">
        <SidebarLeft />
      </Box>
      <Box className="chat-interface">
        <ChatInterface />
      </Box>
      <Box className="sidebar-right-right">
        <SidebarRight />
      </Box>
    </Box>
  );
};

export default App;
