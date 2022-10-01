import React, { useState } from "react";
import {
  inputWrapperStyle,
  messageFormStyle,
  messageFormWrapperStyle,
  messageFormHeadingStyle,
  buttonStyle,
  inputStyle,
} from "../styles/registrationFormStyle";

export const RegistrationForm = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={messageFormWrapperStyle}>
      <p className={messageFormHeadingStyle}>
        Register
      </p>
      <form className={messageFormStyle}>
        <div className={inputWrapperStyle}>
          <label htmlFor="nickname">Nickname:</label>
          <input
            className={inputStyle}
            type="text"
            name="nickname"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className={inputWrapperStyle}>
          <label htmlFor="email">Email:</label>
          <input
            className={inputStyle}
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={inputWrapperStyle}>
          <label htmlFor="password">Password:</label>
          <input
            className={inputStyle}
            type="text"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <input
          className={buttonStyle}
          type="button"
          value="Send"
          onClick={() => {

            fetch("/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                nickname,
                email,
                password,
              }),
            });
            
          }}
        />
      </form>
    </div>
  );
};
