
export function MessageList({ messages }) {
  return (
    <div className="message-list" style={{ height: '300px', overflowY: 'auto', border: '1px solid #444' }}>
      {messages.map((msg, index) => (
        <div key={index} style={{ margin: '10px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
          <span style={{ backgroundColor: msg.role === 'user' ? '#fff' : '#000', padding: '8px', borderRadius: '10px' }}>
            {msg.text}
          </span>
        </div>
      ))}
    </div>
  );
}
