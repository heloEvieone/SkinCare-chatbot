// SidebarLeft.js
import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { ChatBubble, ExitToApp, Help as HelpIcon } from '@mui/icons-material'; // Import necessary icons
import './SidebarLeft.css';
import logo from '../../assets/logo.png';

const SidebarLeft = ({ onComponentChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);  // State for sidebar expansion

  const handleToggle = () => {
    setIsExpanded(!isExpanded);  // Toggle the expanded state
  };

  const handleIconClick = (component) => {
    handleToggle(); // Ensure the sidebar expands when any icon is clicked
    onComponentChange(component);  // Switch component
  };

  return (
    <Box
      className={`sidebar-left ${isExpanded ? 'expanded' : 'collapsed'}`}  // Dynamic class based on expansion state
      sx={{
        width: isExpanded ? '200px' : '80px',  // Adjust width when expanded/collapsed
        height: '100vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        position: 'relative',
        transition: 'width 0.3s ease',  // Smooth transition when width changes
      }}
    >
      {/* Logo section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>

      {/* List section */}
      <div className="sidebar-icon-div">
        <List component="nav">
          <ListItem button onClick={() => handleIconClick('chat')} className="sidebar-item"> {/* Switch to ChatInterface */}
            <ListItemIcon className="sidebar-icon">
              <ChatBubble />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Chats" className="sidebar-text" />}
          </ListItem>
          
          <ListItem button onClick={() => handleIconClick('help')} className="sidebar-item"> {/* Switch to HelpPage */}
            <ListItemIcon className="sidebar-icon">
              <HelpIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Help" className="sidebar-text" />}
          </ListItem>
        </List>
      </div>

      {/* Exit icon section */}
      <div className="sidebar-icon-div" style={{ marginTop: 'auto' }}>
        <List component="nav">
          <ListItem button onClick={handleToggle} className="sidebar-item">
            <ListItemIcon className="sidebar-icon">
              <ExitToApp />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Logout" className="sidebar-text" />}
          </ListItem>
        </List>
      </div>
    </Box>
  );
};

export default SidebarLeft;
