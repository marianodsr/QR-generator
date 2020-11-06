import React, { useState } from "react";



const QrConverter = () => {
  const [qrData, setQrData] = useState(null);
  const [text, setText] = useState("");

  const handleClick = async () => {
      
    if (!text) return;
    const url = new URL("http://localhost:3001");

    const params = new URLSearchParams({
      url: text,
    });

    url.search = params.toString();

    const response = await fetch(url);
    const data = await response.json()
    if(data)  setQrData(data)
    console.log(data);
  };

  return (
    <div style={{display: "flex", width: '100vw', justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
      {qrData && (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "20rem"
        }}>

      <img src={qrData} alt="" style={{
        maxheight: '100%',
        maxwidth: '100%',
      
      }} />
      </div>)}
      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
      <input
        type="text"
        placeholder="Enter text to convert"
        onChange={(e) => setText(e.target.value)}
        value={text}
        style={{padding: '.5rem', width: '20%'}}
   
      />
      <button onClick={handleClick}>Convert!</button>
    </div>

      </div>
  );
};

export default QrConverter;
