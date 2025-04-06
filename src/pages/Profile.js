import React, { useState } from "react";
import { FaPen, FaUsers, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import "./Profile.css";
import { Link } from "react-router-dom";


const Profile = () => {
  // State for user details
  const [user, setUser] = useState({
    name: "Dexter Morgan",
    title: "Software Engineer at XYZ Corp",
    location: "San Francisco, CA",
    bio: "Passionate about technology, AI, and building scalable applications.",
  });

  // State for edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  // State for active tab
  const [activeTab, setActiveTab] = useState("posts");

  // Handle input change
  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  // Save changes
  const saveChanges = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      {/* Profile Banner */}
      <div className="profile-banner">
        <img
          src="https://res.cloudinary.com/highereducation/images/f_auto,q_auto/v1694627620/CyberDegrees.org/typical-day-of-security-software-developer/typical-day-of-security-software-developer.jpg?_i=AA"
          alt="Profile Banner"
        />
      </div>

      {/* Profile Content */}
      <div className="profile-content">
        {/* Profile Info */}
        <div className="profile-info">
          <div className="profile-photo">
            <img
              src="https://img.freepik.com/premium-vector/web-developer-design_24911-42711.jpg"
              alt="Profile"
            />
          </div>
          <div className="profile-details">
            {isEditing ? (
              <div className="edit-profile">
                <input type="text" name="name" value={editedUser.name} onChange={handleChange} />
                <input type="text" name="title" value={editedUser.title} onChange={handleChange} />
                <input type="text" name="location" value={editedUser.location} onChange={handleChange} />
                <textarea name="bio" value={editedUser.bio} onChange={handleChange} />
                <div className="edit-buttons">
                  <button className="save-btn" onClick={saveChanges}>Save</button>
                  <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <h2>{user.name}</h2>
                <p className="title">{user.title}</p>
                <p className="location">
                  <FaMapMarkerAlt /> {user.location}
                </p>
                <p className="bio">{user.bio}</p>
              </>
            )}
          </div>
        </div>

        {/* Profile Actions */}
        <div className="profile-actions">
          <button onClick={() => setIsEditing(true)}>
            <FaPen /> Edit Profile
          </button>
          <Link to="/mynetwork">
  <button>
    <FaUsers /> Connect
  </button>
</Link>

          {/* <button>
            
            <FaBriefcase /> Work Experience
          </button> */}
        </div>

        {/* Tabs Section */}
        <div className="profile-tabs">
          <div className={`tab ${activeTab === "posts" ? "active" : ""}`} onClick={() => setActiveTab("posts")}>
            Posts
          </div>
          <div className={`tab ${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>
            About
          </div>
          <div className={`tab ${activeTab === "photos" ? "active" : ""}`} onClick={() => setActiveTab("photos")}>
            Photos
          </div>
          {/* <div className={`tab ${activeTab === "videos" ? "active" : ""}`} onClick={() => setActiveTab("videos")}>
            Videos
          </div> */}
        </div>

        {/* Dynamic Content Based on Selected Tab */}
        <div className="profile-section">
          {activeTab === "posts" && (
            <div className="profile-posts">
              <div className="post">
                <p>🚀 Just completed an amazing project on AI-driven chatbots!</p>
                <img src="https://imageio.forbes.com/specials-images/imageserve/64ad7ae447783414a7e45d54/Chatbot-Chat-with-AI--Artificial-Intelligence--man-using-technology-smart-robot-AI-/960x0.jpg?format=jpg&width=960" alt="Photo 1" />

              </div>
              <div className="post">
                <p>🎯 Excited to be speaking at the next tech conference. #TechTalks</p>
                <img src="https://techhublive.com/wp-content/uploads/2023/08/2023-tech-hub-live_53073016644_o-1024x683.jpg" alt="Photo 1" />

              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="profile-about">
              <p>
              I'm a passionate Software Engineer with 5 years of experience in building scalable applications.
Skilled in JavaScript, React, Node.js, and AI-based solutions, I enjoy solving complex problems and developing innovative tech solutions.
I have a strong background in full-stack development, focusing on performance, scalability, and user experience.
Experienced in working with MongoDB, GraphQL, and WebSockets, creating real-time and interactive applications.
Always eager to learn and implement the latest AI and cloud technologies to enhance business solutions.
Currently working on a LinkedIn clone, replicating its UI/UX with full responsiveness and functionality.
<h2>Experience:</h2>
<p>
 <h3> 1️⃣ Software Engineer
XYZ Technologies Pvt. Ltd.
📍 Pune, India | 🗓️ Jan 2023 – Present</h3>

Developed and maintained scalable web applications using React, Node.js, and MongoDB.

Led the implementation of RESTful APIs, improving system performance by 30%.

Collaborated with cross-functional teams to enhance UI/UX, boosting user engagement by 25%.

Integrated third-party services such as Firebase and AWS for authentication and cloud storage.</p>

<h3>2️⃣ Frontend Developer Intern
ABC Solutions
📍 Bengaluru, India | 🗓️ May 2022 – Dec 2022</h3>

Designed and developed dynamic, responsive web interfaces using React and CSS.

Optimized website performance, reducing load time by 40%.

Worked closely with backend developers to integrate APIs and enhance user experience.

Fixed UI bugs and improved accessibility for a seamless customer journey.

<p>
  <h3>3️⃣ Backend Developer
DEF Innovations
📍 Mumbai, India | 🗓️ Jul 2021 – Apr 2022</h3>

Built and optimized REST APIs using Node.js and Express for high-traffic applications.

Improved database queries in MongoDB, reducing response time by 35%.

Implemented authentication and authorization using JWT and OAuth.

Wrote unit and integration tests, increasing code reliability and maintainability.</p>
<p>
<h2>📚 Education</h2>
<p> <h3>B.Tech in Computer Science</h3>
Pune Institute of Technology, Pune
2018 – 2022

CGPA: 8.2/10 </p>

<h3>HSC (Science)</h3>
<p>Sunrise High School, Pune
2016 – 2018

Score: 85%</p>

<h3>SSC</h3>
<p>
Greenfield Public School, Aurangabad
2010 – 2016

Score: 89%</p>
</p>


              </p>
            </div>
          )}

          {activeTab === "photos" && (
            <div className="profile-photos">
               <p>Certified Frontend Developer 🚀</p>
              <img src="https://maixuanlinh.com/wp-content/uploads/2023/02/Facebook-Developer-900x500.png" alt="Photo 1" />
             
              {/* <img src="https://media.istockphoto.com/id/1312924009/vector/professional-certificate-of-appreciation-golden-template-design.jpg?s=612x612&w=0&k=20&c=lM4Xf0JoWggAkuzw7youwvJBjw7hQUC2XZ9jF8vpLBk=" alt="Photo 2" />
              <img src="https://cleanexit.org/wp-content/uploads/2020/11/Clean-Exit-Professional-Certificate-2020.png" alt="Photo 3" /> */}
            </div>
          )}

          {activeTab === "videos" && (
            <div className="profile-videos">
              <video controls>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <video controls>
                <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
