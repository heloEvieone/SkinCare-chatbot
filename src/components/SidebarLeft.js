import React from 'react';
import { Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import { ChatBubble, Settings } from '@mui/icons-material';
import './SidebarLeft.css';
import logo from '../assets/logo.png';


const SidebarLeft = () => {
  return (
    <Drawer variant="permanent" 
    anchor="left" 
    PaperProps={{ className: 'sidebar-left', 
      sx: {
        height: '80%', // Full height
      },
    }}>
      <List>
        {/* Add Logo above the icons */}
        <div className="logo-container">
        <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>
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
    </Drawer>
  );
};

export default SidebarLeft;
