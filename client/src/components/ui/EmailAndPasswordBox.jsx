import React, { useState } from "react";

const EmailAndPasswordBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    setEmail("example@email.com");
    setPassword("password123");
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "200px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div style={{ marginBottom: "10px" }}>Email:</div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div style={{ marginBottom: "10px", marginTop: "10px" }}>Password:</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

export default EmailAndPasswordBox;
