import React from "react";
import "../Styles/Homepage.css";
import Header from "../Components/Header/Header";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <>
      <Header />
      <div className="home-container">
        <ul>
          <Link to="/gift-detail">
          <li>My Gifts</li>
          </Link>
          <Link to="/create-event">
          <li> Create Event</li>
          </Link>
          <Link to="/update-account">
          <li>Update Bank Account</li>
          </Link>
          <Link to="/update-password">
          <li>Update Password</li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
