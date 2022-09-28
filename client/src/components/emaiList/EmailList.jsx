import React from "react";
import "./style.scss";

const EmailList = () => {
  return (
    <div className="email__list">
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <form>
        <input type="text" placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default EmailList;
