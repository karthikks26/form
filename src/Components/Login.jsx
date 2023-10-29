import React, { useState } from "react";
import img from "../assets/img.png";
import "./Login.css";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showpassword, setShowPassword] = useState(false);
  function handleshowpassword(e) {
    setShowPassword(!showpassword);
  }

  return (
    <>
      <div className="main">
        <h1>Login</h1>
        <p>Login ID</p>
        <input type="text" />
        <p>Password</p>
        <div className="re">
          <input type={showpassword ? "text" : "password"} className="ps" />
          {showpassword ? (
            <EyeOff className="icon" onClick={handleshowpassword} />
          ) : (
            <Eye className="icon" onClick={handleshowpassword} />
          )}
        </div>
        <div className="flex">
          <div>
            <input type="checkbox" required />
            <span>Remember me</span>
          </div>
          <div>
            <span>Change Password</span>
          </div>
        </div>
        <div style={{ width: "300px" }}>
          <input type="checkbox" required />
          <span>
            Agree to <Link to="cc">terms and conditions</Link>
          </span>
        </div>

        <br />

        <button>
          <Link
            to="/Homepage"
            style={{ textDecoration: "none", color: "white" }}
          >
            Login
          </Link>
        </button>
        <br />
        <span className="last">
          Don`t Have any Account ?
          <span style={{ color: "blue" }}>Create new Account</span>
        </span>
      </div>
    </>
  );
};

export default Login;
