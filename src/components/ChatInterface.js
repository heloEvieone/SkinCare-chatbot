import React, { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import { CameraAlt, AttachFile, Send } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import './ChatInterface.css';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add the user's message to the chat
      const userMessage = { text: message, sender: 'user' };
      setChatMessages([...chatMessages, userMessage]);

      // Auto-reply from the system after a short delay
      setTimeout(() => {
        const systemMessage = { text: 'This is an auto-reply from the system.', sender: 'system' };
        setChatMessages((prevMessages) => [...prevMessages, systemMessage]);
      }, 1000);

      // Clear the message input
      setMessage('');
    }
  };

  return (
    <Box className="chat-container">
      <Box className="chat-header">
        <strong>Korean products</strong>
      </Box>
      <Divider sx={{ height:'1px', 
                      backgroundColor: '#00000033', 
                      marginTop: '10px',
                      marginBottom: '10px'}} 
                className='divider'/>

      <Box className="chat-messages">
        {chatMessages.map((msg, index) => (
          <Box
            key={index}
            className={`chat-message ${msg.sender === 'user' ? 'chat-message-user' : 'chat-message-system'}`}
          >
            {msg.text}
            <span className="chat-timestamp">{msg.time}</span>
          </Box>
        ))}
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
        sx={{
          width: '100%', 
          backgroundColor: '#FFFFFF',
          boxShadow: '0px 4px 4px 0px #00000040',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none', // Remove the border
            },
          },
        }}
      />
    </Box>
  );
};

export default ChatInterface;
