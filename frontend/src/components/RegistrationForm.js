import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  inputWrapperStyle,
  messageFormStyle,
  messageFormWrapperStyle,
  messageFormHeadingStyle,
  buttonStyle,
  inputStyle,
} from "../styles/registrationFormStyle";

const SERVER_URL = "http://localhost:3500/api"

export const RegistrationForm = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  return (
    <div className={messageFormWrapperStyle}>
      <p className={messageFormHeadingStyle}>Register</p>
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
          onClick={async () => {
            const response = await fetch(`${SERVER_URL}/auth/register`, {
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
            if (response.status < 300) {
              const data = await response.json();
              localStorage.setItem("snackOverflowJwt", data.accessToken);
              navigate("/home");
            } else {
              console.log("Error communicating with server");
            }

          }}
        />
      </form>
    </div>
  );
};
