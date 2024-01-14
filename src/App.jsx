import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="img-container">
        <QRCodeSVG value={value} size={256} />
      </div>
      <div className="setup">
        <input
          onChange={(e) => setValue(e.target.value)}
          type='text'
          placeholder='Type Something Here..'
          style={{borderRadius:8}}
        />
      </div>
    </div>
  );
}

export default App;
