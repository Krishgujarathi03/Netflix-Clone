import React, { useState } from "react";
import "./login.css";
import logo from "../../assests/logo.png";
import { signUp, login } from "../../firebase";
import netflix_spinner from "../../assests/netflix_spinner.gif";

const Login = () => {
  const [state, setState] = useState("Sign In");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (state === "Sign In") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
  ) : (
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <h1>{state}</h1>
        <form>
          {state === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              placeholder="Name"
            />
          ) : (
            <></>
          )}

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {state}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">
                {state === "Sign In"
                  ? "Remember Me"
                  : "I agree to terms of service"}
              </label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {state === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span onClick={() => setState("Sign Up")}>Sign Up</span>
            </p>
          ) : (
            <p>
              Already have account?{" "}
              <span onClick={() => setState("Sign In")}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
