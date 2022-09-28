import React, { useContext } from "react";
import "./style.scss";
import { AuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { Api } from "../../api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const {
    state: { loading, error },
    dispatch,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const [user, setUser] = useState({ username: null, password: null });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.username && user.password) {
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await Api.post("auth/login", user);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate(-1);
        // window.screenTop(0);
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      }
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="login__input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="login__input"
            required
          />
          <button disabled={loading} className="login__button">
            Login
          </button>
          {error && <span>{error.message}</span>}
        </div>
      </form>
      <span>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </span>
    </div>
  );
};

export default Login;
