import React, { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment, Modal, Button } from '@mui/material';
import { CameraAlt, AttachFile, Send, Clear } from '@mui/icons-material';
import ReactWebcam from 'react-webcam';
import Divider from '@mui/material/Divider';
import './ChatInterface.css';

const ChatInterface = () => {
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [openWebcam, setOpenWebcam] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [error, setError] = useState('');

  const handleSendMessage = () => {
    if (message.trim() || capturedImage) {
      const userMessage = {
        text: message || null,
        image: capturedImage || null,
        sender: 'user',
      };
      setChatMessages([...chatMessages, userMessage]);

      // Auto-reply from the system after a short delay
      setTimeout(() => {
        const systemMessage = { text: 'This is an auto-reply from the system.', sender: 'system' };
        setChatMessages((prevMessages) => [...prevMessages, systemMessage]);
      }, 1000);

      // Clear the input and image
      setMessage('');
      setCapturedImage(null);
      setError(''); // Clear error if any
    }
  };

  const handleOpenWebcam = () => {
    setOpenWebcam(true);
  };

  const handleCloseWebcam = () => {
    setOpenWebcam(false);
  };

  const handleCapture = (webcamRef) => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setOpenWebcam(false);
  };

  const handleRemoveImage = () => {
    setCapturedImage(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCapturedImage(reader.result); // Set the uploaded image as a preview
      };
      reader.readAsDataURL(file);
      setError('');
    } else {
      setError('Only image files are allowed');
    }
    event.target.value = ''; // Reset the file input so the same file can be uploaded again if needed
  };

  const webcamRef = React.useRef(null);

  return (
    <Box className="chat-container">
      <Box className="chat-header">
        <strong>Korean products</strong>
      </Box>
      <Divider
        sx={{
          height: '1px',
          backgroundColor: '#00000033',
          marginTop: '10px',
          marginBottom: '10px',
        }}
        className="divider"
      />

      <Box className="chat-messages">
        {chatMessages.map((msg, index) => (
          <Box
            key={index}
            className={`chat-message ${msg.sender === 'user' ? 'chat-message-user' : 'chat-message-system'}`}
          >
            {msg.text && <p>{msg.text}</p>}
            {msg.image && <img src={msg.image} alt="Captured" className="chat-image-preview" />}
            <span className="chat-timestamp">{msg.time}</span>
          </Box>
        ))}
      </Box>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if a non-image file is uploaded */}

      <TextField
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Hello! How can we help you today?"
        InputProps={{
          startAdornment: capturedImage && (
            <InputAdornment position="start">
              <Box className="image-preview-container">
                <img src={capturedImage} alt="Preview" className="image-preview" />
                <IconButton className="remove-image-button" onClick={handleRemoveImage}>
                  <Clear />
                </IconButton>
              </Box>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton className="icon-button" onClick={handleOpenWebcam}>
                <CameraAlt />
              </IconButton>
              <IconButton className="icon-button">
                <label htmlFor="upload-image">
                  <AttachFile />
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="upload-image"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
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

      {/* Webcam Modal */}
      <Modal open={openWebcam} onClose={handleCloseWebcam}>
        <Box className="webcam-modal">
          <ReactWebcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={500}
            height={400}
            className="webcam-frame"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleCapture(webcamRef)}
            className="capture-button"
          >
            Capture
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ChatInterface;
