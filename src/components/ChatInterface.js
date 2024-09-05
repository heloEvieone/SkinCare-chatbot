import React, { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import { CameraAlt, AttachFile, Send } from '@mui/icons-material';
import './ChatInterface.css';

const ChatInterface = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    setMessage('');
  };

  return (
    <Box className="chat-container">
      <Box className="chat-messages">
        {/* Render chat messages */}
      </Box>
      <TextField
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Hello! How can we help you today?"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton className="icon-button">
                <CameraAlt />
              </IconButton>
              <IconButton className="icon-button">
                <AttachFile />
              </IconButton>
              <IconButton onClick={handleSendMessage} className="icon-button">
                <Send />
              </IconButton>
            </InputAdornment>
          ),
        }}
        className="chat-input"
      />
    </Box>
  );
};

export default ChatInterface;
