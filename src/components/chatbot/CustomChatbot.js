import React from "react";
import ChatBot from "react-simple-chatbot";

function CustomChatbot(props) {
  const steps = [
      {
       id: "Greet",
       message: "Hello, Welcome to our site",
       trigger: "Done"
      },
      {
       id: "Done",
       message: "Have a great day !!",
       end: true
      }
    ];
  return <ChatBot steps={steps} />;
}
export default CustomChatbot;
