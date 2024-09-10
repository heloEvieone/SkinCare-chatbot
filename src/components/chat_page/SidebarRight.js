import React from 'react';
import { Box, Avatar, Button, List, ListItem, ListItemText } from '@mui/material';
import Divider from '@mui/material/Divider';
import AddBoxIcon from '@mui/icons-material/AddBox';
import './SidebarRight.css';

const SidebarRight = () => {
  return (
    <Box className="sidebar-right">
      {/* User Info */}
      <div className='inner'>
      <Box className="user-info">
        <Box>
          <strong>Rhyli James</strong>
        </Box>
        <Avatar sx={{ marginLeft: '8px', backgroundColor: '#42a5f5' }}>R</Avatar>
      </Box>
      </div>
      <Divider sx={{ height:'1px', 
                      backgroundColor: '#00000033', 
                      marginBottom: '2px'}} 
                className='divider'/>

    {/* New Chat */}
      <List component="nav">
      <ListItem button>
        <div className='new-chat-btn'>
          <ListItemText primary="New Chat" className="new-chat-item" />
          <AddBoxIcon/>
          </div>
        </ListItem>
      </List>

      <div className='history-btn-gp'>
        {/* <Button variant="contained" fullWidth className="chat-history-btn"
        sx={{ backgroundColor: '#E9EAFE',
              color: '#000000',
              boxShadow: '0px 4px 4px 0px #00000040',
              borderRadius: '12px',
              marginBottom: '20px'
        }}
      >
       Hair Care
      </Button>*/}
      
      <Button variant="contained" fullWidth className="chat-history-btn"
        sx={{ backgroundColor: '#E9EAFE',
              color: '#000000',
              boxShadow: '0px 4px 4px 0px #00000040',
              borderRadius: '12px',
              marginBottom: '20px'
        }}
      >
        Korean Products
      </Button>
      <Button variant="contained" fullWidth className="chat-history-btn"
        sx={{ backgroundColor: '#E9EAFE', 
              color: '#000000',
              boxShadow: '0px 4px 4px 0px #00000040',
              borderRadius: '12px',
              marginBottom: '20px'
        }}
      >
        SkinCare
      </Button>
      </div>
    </Box>
    

   
  );
};

export default SidebarRight;
