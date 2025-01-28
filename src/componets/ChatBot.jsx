import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Set up the configuration object
    window.embeddedChatbotConfig = {
      chatbotId: "dyLrwTYQSUZkEgLbgF9ln",
      domain: "www.chatbase.co"
    };

    // Create the script element
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.defer = true;
    script.setAttribute('chatbotId', 'dyLrwTYQSUZkEgLbgF9ln');
    script.setAttribute('domain', 'www.chatbase.co');

    // Append the script to the body
    document.body.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      {/* Any content related to your chatbot can be here */}
    </div>
  );
};

export default Chatbot;