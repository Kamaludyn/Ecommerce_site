import React, { useEffect, useRef, useState } from "react";

import { FaEnvelope, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginSignUp = () => {
  const [loginForm, setLoginForm] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleLoginChange = (e) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="input">
          <FaEnvelope />
          <input
            type="email"
            onChange={handleLoginChange}
            ref={userRef}
            name="loginEmail"
            placeholder="Email"
            required
          />
        </div>
        <div className="input">
          <FaKey />
          <input
            type="password"
            onChange={handleLoginChange}
            name="loginPassword"
            placeholder="Password"
            required
          />
        </div>
      </div>

      <button type="submit" className="submit">
        Login
      </button>

      <div className="password">
        Lost Password? <Link className="link">Click Here!</Link>
      </div>
    </form>
  );
};

export default LoginSignUp;
