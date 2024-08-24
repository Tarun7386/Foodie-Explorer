
import React from "react";
import './sheetcss1/SendMsg.css'
const SendMessage = () => {
  const handleSendMessage = async () => {
    const message = prompt("Enter the message to send to all users:");
    if (message) {
      try {
        const response = await fetch(
          "http://localhost:3000/message/send_message",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
          }
        );
        if (response.ok) {
          alert("Message sent successfully");
        } else {
          alert("Error sending message");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Error sending message");
      }
    }
  };
  return (
    <div className="send_msg">
      <img className="logo-msg" src="./logo-img.png"/>
      <p>Send Message To Users</p>
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default SendMessage;
