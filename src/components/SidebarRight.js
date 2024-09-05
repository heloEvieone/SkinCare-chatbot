import React from 'react';
import { Box, Avatar, Button, List, ListItem, ListItemText } from '@mui/material';
import './SidebarRight.css';

const SidebarRight = () => {
  return (
    <Box className="sidebar-right">
      {/* User Info */}
      <div className='inner'>
      <Box className="user-info">
        <Avatar sx={{ marginRight: '8px', backgroundColor: '#42a5f5' }}>R</Avatar>
        <Box>
          <strong>Rhyli James</strong>
        </Box>
      </Box>

      {/* New Chat Button */}
      <Button variant="contained" fullWidth className="new-chat-btn">
        New Chat
      </Button>

      {/* Chat History */}
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Hair Care" className="chat-history-item" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Body Care" className="chat-history-item" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Korean Products" className="chat-history-item" />
        </ListItem>
      </List>
      </div>
    </Box>
   
  );
};

export default SidebarRight;
