import React, { useState } from 'react'
import QRCode from "react-qr-code";
import  "./index.css"

export default function QrCodeGenerator() {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

 function handleGenerateQrCode() {
    setQrCode(input)
    setInput('')

  }
  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input type='text' name='qr-code' placeholder='Enter your value here' onChange={(e) => setInput(e.target.value)} /> 
        <button onClick={handleGenerateQrCode} disabled={input && input.trim() !== '' ? false : true}>Generate</button>
        </div>
        <div>
          <QRCode id="" value={qrCode} size={400} bgColor="#fff"/>
        </div>
      </div>
  )
}