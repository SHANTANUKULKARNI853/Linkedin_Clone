import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Profile Section */}
      <div className="sidebar-profile">
        <img className="cover-img" src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1694627620/CyberDegrees.org/typical-day-of-security-software-developer/typical-day-of-security-software-developer.jpg?_i=AA" alt="Cover" />
        <img className="profile-img" src="https://img.freepik.com/premium-vector/web-developer-design_24911-42711.jpg" alt="Profile" />
        <h3>Dexter Morgan</h3>
        <p>Software Developer | React Enthusiast</p>
      </div>

      {/* Stats */}
      <div className="sidebar-stats">
        <div className="stat">
          <p>Connections</p>
          <span>500+</span>
        </div>
        <div className="stat">
          <p>Profile Views</p>
          <span>2,345</span>
        </div>
      </div>

      {/* Hashtags */}
      <div className="sidebar-hashtags">
        <p>Recent</p>
        <p>#reactjs</p>
        <p>#webdevelopment</p>
        <p>#jobsearch</p>
        <p>#networking</p>
      </div>
    </div>
  );
};

export default Sidebar;
