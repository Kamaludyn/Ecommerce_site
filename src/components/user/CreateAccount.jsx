import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaAddressBook,
  FaEnvelope,
  FaKey,
  FaPortrait,
  FaUserCircle,
} from "react-icons/fa";

import axios from "axios";

const CreateAccount = () => {
  const userRef = useRef();
  const [form, setForm] = useState({
    surname: "",
    otherName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <FaUserCircle />
        <input
          type="text"
          onChange={handleChange}
          ref={userRef}
          name="surname"
          placeholder="Sur-Name"
          required
        />
      </div>
      <div className="input">
        <FaPortrait />
        <input
          type="text"
          onChange={handleChange}
          name="othername"
          placeholder="Other Name"
          required
        />
      </div>
      <div className="input">
        <FaPhone />
        <input
          type="text"
          inputMode="numeric"
          onChange={handleChange}
          name="phone"
          placeholder="Phone"
          required
        />
      </div>
      <div className="input">
        <FaAddressBook />
        <input
          type="text"
          onChange={handleChange}
          name="address"
          placeholder="Address"
          required
        />
      </div>
      <div className="input">
        <FaEnvelope />
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="input">
        <FaKey />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
          required
        />
      </div>

      <div className="checkboxs">
        <input type="checkbox" name="newsletter" />
        <div>
          Sign up for email to hear about product launches, exclusive offers and
          news
        </div>
      </div>
      <div className="checkboxs">
        <input type="checkbox" name="terms" required />
        <div>
          Agree to the <strong>Terms & Condition</strong> and
          <strong> Privacy Policy</strong>.
        </div>
      </div>
      <button type="submit" className="submit">
        Create Accout
      </button>
      <div className="password">
        Already have an account?{" "}
        <Link to={"/loginForm"} className="link">
          Log in
        </Link>
      </div>
    </form>
  );
};

export default CreateAccount;
