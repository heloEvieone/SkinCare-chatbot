import React from 'react';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './HomePage.css';
import logo from '../../assets/logo.png';  // Import your logo

const HomePage = () => {
  const navigate = useNavigate();  // Initialize navigate

  const handleGetStartedClick = () => {
    navigate('/chat');  // Navigate to /chat route
  };

  return (
    <div className="home-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="btn">
        <Button
          variant="outlined"
          sx={{
            borderColor: 'black',
            color: 'black',
            '&:hover': {
              borderColor: 'black',
              backgroundColor: '#ffffff',
            },
            fontSize: '20px',
            fontWeight: '500',
            padding: '10px 20px',
            borderRadius: '50px',
          }}
          onClick={handleGetStartedClick}  // Attach the click handler
        >
          Get Started
        <EastIcon
          sx={{
            marginLeft: '5px'
          }}/>
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
