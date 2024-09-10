import React from 'react';
import { Chat, CameraAlt, UploadFile, LocalHospital, QuestionAnswer } from '@mui/icons-material'; 
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';// Import icons
import './HelpPage.css';

const HelpPage = () => {
  return (
    <div className="help-container">
       
      <h2><HelpOutlineIcon 
       sx={{marginRight: '10px', width: '30px', height: '30px'}}
       />
       Help Center </h2>
      <p>
        Our AI-powered platform focuses on providing personalized solutions for your skin care needs. With the help of our advanced technology, you can easily tackle skin problems and find beauty and skin clinics located in Myanmar.
      </p>

      <h3>Features of Our Website</h3>
      <ul>
        <li>
          <Chat className="help-icon" />
          <strong>Interactive Skin Consultation:</strong> Chat with our BeautyAssist bot to discuss your skin concerns and get personalized recommendations.
        </li>
        <li>
          <CameraAlt className="help-icon" />
          <strong>Capture and Upload:</strong> You can take a picture of your face using your webcam or upload an image file to get a detailed analysis of your skin type.
        </li>
        <li>
          <LocalHospital className="help-icon" />
          <strong>Skin Clinic Locator:</strong> Get suggestions for top skin clinics in Myanmar based on your needs and location.
        </li>
      </ul>

      <h3>How to Use the Chat Page</h3>
      <ol>
        <li>
          <QuestionAnswer className="help-icon" />
          Navigate to the <strong>Chat Page</strong> to start an interactive conversation with our BeautyAssist bot.
        </li>
        <li>
          Talk to the bot about your skin issues and get helpful tips and product recommendations tailored for you.
        </li>
        <li>
          <CameraAlt className="help-icon" />
          You can <strong>capture your face</strong> in real-time or <strong>upload an image</strong> to allow our bot to analyze your skin and provide further advice.
        </li>
        <li>
          <LocalHospital className="help-icon" />
          Follow the suggestions to find skin care solutions and nearby clinics for professional help.
        </li>
      </ol>
    {/* <h2>FAQs</h2>
      <h3>How does the AI analyze my skin?</h3>
      <p>
        Our AI uses advanced algorithms to detect skin types (dry, oily, combination) and provide accurate skin care advice. The face capture and image upload features enhance this process by allowing the AI to get a clear view of your skin.
      </p>

      <h3>How do I find a clinic?</h3>
      <p>
        After your consultation, the bot will suggest skin care clinics in Myanmar based on your preferences and location. You can also get clinic recommendations based on the specific treatment you need.
      </p>

      <h3>What image formats are supported?</h3>
      <p>
        You can upload image files in formats such as .jpg, .jpeg, and .png for analysis.
      </p>

      <p>If you have any more questions, feel free to contact our support team. We're here to help you on your beauty and skin care journey!</p> */}
      
    </div>
  );
};

export default HelpPage;
