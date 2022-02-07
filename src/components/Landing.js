import React, { useState } from "react";
// react router dom
import { useNavigate } from "react-router-dom";
// styles
import "../styles/landing.css";

const Landing = () => {
  // state hook
  const [username, setUsername] = useState("");
  // init navigate
  const navigate = useNavigate();

  // method to display username
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("profile", { state: { username } });
  };

  return (
    <div className="land__container">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username..."
            required
            className="land__input"
          />
          <button className="land__btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Landing;
