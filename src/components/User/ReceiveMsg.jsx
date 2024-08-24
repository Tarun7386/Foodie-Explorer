import React, { useState, useEffect } from "react";

const ReceiveMsg = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/message/latest_message"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMessage(data.text);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMessage();
  }, []);

  const containerStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    animation: "scroll 25s linear infinite",
    color: "green",
    fontWeight: 'bold',
    textAlign: "center",
    padding:'5px',
    

  };
  

  const keyframesStyle = `
    @keyframes scroll {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <div style={{padding:'5px ',marginTop:"0px"  }}>
      
      {error && <p className="error">{error}</p>}
      <style>{keyframesStyle}</style>
      <div style={containerStyle}>
        <p >{message || "------Thank You For Visting Website------"}</p>
      </div>
    </div>
  );
};

export default ReceiveMsg;
