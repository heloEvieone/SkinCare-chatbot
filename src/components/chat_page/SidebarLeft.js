import React from 'react';
import { Box, List, ListItem, ListItemIcon } from '@mui/material';
import { ChatBubble, Settings, ExitToApp } from '@mui/icons-material'; // Import ExitToApp icon
import './SidebarLeft.css';
import logo from '../../assets/logo.png';

const SidebarLeft = () => {
  return (
    <Box
      className="sidebar-left"
      sx={{
        width: '80px', // Adjust width as per your layout
        height: '100vh', // Full height
        backgroundColor: '#f4f4f4', // Background color for sidebar
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '20px',
        position: 'relative', // Position relative for the exit icon
      }}
    >
      {/* Logo section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>
      
      {/* List section */}
      <div className="sidebar-icon-div">
        <List component="nav">
          <ListItem button className="sidebar-item">
            <ListItemIcon className="sidebar-icon">
              <ChatBubble />
            </ListItemIcon>
          </ListItem>
          <ListItem button className="sidebar-item">
            <ListItemIcon className="sidebar-icon">
              <Settings />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>

      {/* Exit icon section */}
      <div className="sidebar-icon-div" style={{ marginTop: 'auto' }}>
        <List component="nav">
          <ListItem button className="sidebar-item">
            <ListItemIcon className="sidebar-icon">
              <ExitToApp />
            </ListItemIcon>
          </ListItem>
        </List>
      </div>
    </Box>
  );
};

export default SidebarLeft;
