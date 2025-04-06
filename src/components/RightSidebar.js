import React from "react";
import "./RightSidebar.css";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="news-section">
        <h3>Trending News</h3>
        <ul>
          <li>🚀 AI is revolutionizing the tech industry</li>
          <li>📈 Stock market hits an all-time high</li>
          <li>💼 Job hiring trends for 2025</li>
          <li>🌍 Climate change & global impact</li>
        </ul>
      </div>

      <div className="suggested-connections">
        <h3>Suggested Connections</h3>
        <ul>
          <li>🔹 John Doe – Software Engineer</li>
          <li>🔹 Jane Smith – Data Scientist</li>
          <li>🔹 Mark Wilson – UX Designer</li>
        </ul>
      </div>

      <div className="ads-placeholder">
        <p>🔵 Sponsored Advertisement</p>
      </div>
    </div>
  );
};

export default RightSidebar;
