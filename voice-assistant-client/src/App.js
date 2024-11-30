// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');

  // Capture voice input
  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition(); // For Chrome
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setCommand(transcript);
      sendCommandToBackend(transcript);
    };

    recognition.start();
  };

  // Send voice command to Django API
  const sendCommandToBackend = async (command) => {
    try {
      const res = await axios.post('http://localhost:8000/api/voice/', { command });
      setResponse(res.data.response);
    } catch (error) {
      console.error('Error communicating with backend:', error);
      setResponse('Error processing command.');
    }
  };

  return (
    <div>
      <h1>Voice Assistant</h1>
      <button onClick={handleVoiceInput}>Start Voice Command</button>
      <p><strong>Command:</strong> {command}</p>
      <p><strong>Response:</strong> {response}</p>
    </div>
  );
}

export default App;
