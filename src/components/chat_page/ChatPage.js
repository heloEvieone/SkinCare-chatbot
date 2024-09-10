import React, { useState } from 'react';
import { Box } from '@mui/material';
import SidebarLeft from './SidebarLeft';
import ChatInterface from './ChatInterface';
import HelpPage from './HelpPage'; // Import HelpPage
import SidebarRight from './SidebarRight';
import './ChatPage.css';

const ChatPage = () => {
  const [activeComponent, setActiveComponent] = useState('chat'); // State to track the active component

  // Handler to switch components
  const handleComponentChange = (component) => {
    setActiveComponent(component); // Update the state with the selected component
  };

  return (
    <Box className="app-container">
      <div className="second-container">
        <Box className="sidebar-left-div">
          <SidebarLeft onComponentChange={handleComponentChange} /> {/* Pass handler to Sidebar */}
        </Box>

        <Box className="chat-interface-div">
          {/* Conditionally render ChatInterface or HelpPage */}
          {activeComponent === 'chat' && <ChatInterface />}
          {activeComponent === 'help' && <HelpPage />}
        </Box>

        <Box className="sidebar-right-div">
          <SidebarRight />
        </Box>
      </div>
    </Box>
  );
};

export default ChatPage;
