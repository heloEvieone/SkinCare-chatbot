import React from 'react';
import { Box } from '@mui/material';
import SidebarLeft from './components/SidebarLeft';
import ChatInterface from './components/ChatInterface';
import SidebarRight from './components/SidebarRight';
import './App.css';  // Importing the CSS file

const App = () => {
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

export default App;
