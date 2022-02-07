import React from "react";
// react router dom
import { useLocation } from "react-router-dom";
// styles
import "../styles/profile.css";

const Profile = () => {
  const { state } = useLocation();

  return (
    <div className="pro__container">
      <div className="pro_content">Username: {state.username}</div>
    </div>
  );
};

export default Profile;
