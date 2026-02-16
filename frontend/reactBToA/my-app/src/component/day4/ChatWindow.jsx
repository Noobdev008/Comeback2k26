import { useState } from "react";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I am your AI assistant." },
  ]);

  // Yeh function text lega aur list update karega
const handleSend = async (userText) => {
  if (!userText.trim()) return;

  const newUserMessage = { role: "user", text: userText };
  setMessages((prev) => [...prev, newUserMessage]);

  try {
    const API_KEY = "xyz..."; 
    
    // Using gemini-2.0-flash from your confirmed list
    // Try gemini-2.5-flash first
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userText }] }]
      }),
    });

    const data = await response.json();

    if (response.ok && data.candidates) {
      const botReply = data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } else {
      console.error("Error details:", data);
      throw new Error(data.error?.message || "Response error");
    }
  } catch (error) {
    console.error("AI Error:", error);
    setMessages((prev) => [...prev, { role: "bot", text: "Bhai, error aa gaya: " + error.message }]);
  }
};

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", border: "2px solid #555", borderRadius: "10px", padding: "10px" }}>
      <h2>AI Chat</h2>
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSend} /> 
    </div>
  );
}

