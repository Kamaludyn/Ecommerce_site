import { useState } from "react";
import { IconContext } from "react-icons";
import LoginFoam from "./LoginForm";
import "./LoginSignUp.css";
import CreateAccount from "./CreateAccount";
const LoginSignUp = () => {
  const [action, setAction] = useState("Login");

  const login = () => {
    setAction("Login");
  };

  const createAccount = () => {
    setAction("Create Account");
  };

  return (
    <IconContext.Provider value={{ color: "#676767", size: "1.5em" }}>
      <div className="login-createAcctForm">
        <div className="sub-header">
          <div
            className={action === "Create Account" ? "deselect" : "select"}
            onClick={login}
          >
            Login
          </div>
          <div
            className={action === "Login" ? "deselect" : "select"}
            onClick={createAccount}
          >
            Create Account
          </div>
        </div>
        {action === "Login" ? <LoginFoam /> : <CreateAccount />}
      </div>
    </IconContext.Provider>
  );
};

export default LoginSignUp;
