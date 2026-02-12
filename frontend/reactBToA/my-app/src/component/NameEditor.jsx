import { useState } from "react";

export function NameEditor() {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    if (e.target.value.length <= 20) {
      setName(e.target.value);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}>
      <input 
        type="text" 
        value={name} 
        onChange={handleInputChange} 
        placeholder="Apna naam likho..."
      />
      <div>{name ? `Welcome, ${name}` : "Naam toh likho bhai!"}</div>
    </div>
  );
}