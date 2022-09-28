import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navbar__container container">
        <div className="navbar__logo">
          <Link to="/">Booking</Link>
        </div>
        {user ? (
          <div className="navbar__btn">
            <h3>{user.username}</h3>
            <button
              className="navbar__btn-logout btn"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar__btn">
            <Link to="/register">
              <button className="navbar__btn-register btn">Register</button>
            </Link>
            <Link to="/login">
              <button className="navbar__btn-login btn">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
