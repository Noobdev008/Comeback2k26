import { useState } from "react";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";

export function ChatWindow() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I am your AI assistant." },
  ]);

  // Yeh function text lega aur list update karega
const handleSend = async (userText) => {
  const newUserMessage = { role: "user", text: userText };
  setMessages((prev) => [...prev, newUserMessage]);

  try {
    const API_KEY = ""; // Apni poori key dalo
    // URL ko ek baar dhyaan se check karo
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: userText }] }]
      }),
    });

    const data = await response.json();

    // ERROR CHECK: Pehle dekho data sahi aaya ya nahi
    if (data.candidates && data.candidates[0]) {
      const botReply = data.candidates[0].content.parts[0].text;
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } else {
      // Agar API ne error bheja ho (jaise invalid key)
      console.error("API Error Response:", data);
      throw new Error("Invalid API response format");
    }

  } catch (error) {
    console.error("AI Error:", error);
    setMessages((prev) => [...prev, { role: "bot", text: "Bhai, API ne dhokha de diya! Check console." }]);
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


//