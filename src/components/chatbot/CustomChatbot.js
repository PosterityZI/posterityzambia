import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

function CustomChatbot(props) {

     const config = {
     width: "300px",
     height: "400px",
     floating: true
   };

       const theme = {
         background: "white",
         fontFamily: "Arial, Helvetica, sans-serif",
         headerBgColor: "#00B2B2",
         headerFontColor: "#fff",
         headerFontSize: "25px",
         botBubbleColor: "#00B2B2",
         botFontColor: "#fff",
         userBubbleColor: "#fff",
         userFontColor: "#4c4c4c"
        };

  const steps = [
     {
       id: "Greet",
       message: "Hello, Welcome to Posterity Zambia, we are currently unavailable.",
       trigger: "Phone Contact"
     },
     {
       id: "Phone Contact",
       message: "For any urgent matters, kindly call us on : +260969931732",                        trigger: "Email Contact"
     },
     {
       id: "Email Contact",
       message: "You can send us an email at : posterity@gmail.com",
       trigger: "Home Address"
     },
        {
           id: "Home Address",
           message: "Or better yet visit our offices in Lusaka's PHI",
           trigger: "Done"
        },
         {
       id: "Done",
       message: "Have a great day !!",
       end: true
      }
    ];
   
   return (
   <ThemeProvider theme={theme}>
   <ChatBot steps={steps} {...config} />
   </ThemeProvider>
   )
  }
  export default CustomChatbot;
