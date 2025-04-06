import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaHome, FaUserFriends, FaBriefcase, FaEnvelope, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">Linked<span>In</span></Link>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="navbar-right">
          <Link to="/" className="nav-icon"><FaHome /><span>Home</span></Link>
          <Link to="/mynetwork" className="nav-icon"><FaUserFriends /><span>My Network</span></Link>
          <Link to="/jobs" className="nav-icon"><FaBriefcase /><span>Jobs</span></Link>
          <Link to="/messages" className="nav-icon">
  <FaEnvelope /><span>Messaging</span>
</Link>

          {/* <Link to="/notifications" className="nav-icon"><FaBell /><span>Notifications</span></Link> */}
          <Link to="/profile" className="nav-icon"><FaUserCircle /><span>Me</span></Link>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
