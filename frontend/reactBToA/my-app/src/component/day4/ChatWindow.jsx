import { useState } from "react";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I am your AI assistant." },
  ]);

  // Yeh function text lega aur list update karega
  const handleSend = (userText) => {
    const newUserMessage = { role: "user", text: userText };
    
    // Purane messages + naya message
    setMessages((prev) => [...prev, newUserMessage]);

    // Fake Bot Reply (Extra: 1 sec baad response)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Main abhi seekh raha hoon, par aapne kaha: " + userText }
      ]);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", border: "2px solid #555", borderRadius: "10px", padding: "10px" }}>
      <h2>AI Chat</h2>
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSend} /> 
    </div>
  );
}