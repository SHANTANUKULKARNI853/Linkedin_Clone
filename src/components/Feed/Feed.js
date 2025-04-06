import React, { useState } from "react";
import "./Feed.css";
import { FaThumbsUp, FaComment, FaShare, FaPaperclip ,FaImage, FaCalendarAlt, FaNewspaper } from "react-icons/fa";

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "John Doe",
      text: "Just finished a great project on AI!",
      likes: 12,
      comments: 5,
      shares: 2,
      image: "https://www.q3tech.com/wp-content/uploads/2024/01/AI-1-1.jpg", // Sample image URL
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Completed Mircrosoft Certification!",
      likes: 25,
      comments: 10,
      shares: 3,
      image: "https://i0.wp.com/build5nines.com/wp-content/uploads/2020/01/Microsoft_Certification_2020_Featured_Image.jpg?fit=900%2C506&ssl=1", // Sample image URL
    },
  ]);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (id) => {
    // Placeholder function for commenting
    alert("Comment section for Post ID: " + id);
  };

  const handleShare = (id) => {
    // Placeholder function for sharing
    alert("Shared Post ID: " + id);
  };

  return (
    <div className="feed">
       <div className="post-box">
      <div className="post-header">
        <img src="https://img.freepik.com/premium-vector/web-developer-design_24911-42711.jpg" alt="Profile" className="profile-pic" />
        <input type="text" placeholder="What do you wanna say?" />
      </div>
      <div className="post-actions">
        <button><FaImage /> Media</button>
        <button><FaCalendarAlt /> Event</button>
        <button><FaNewspaper /> Article</button>
      </div>
    </div>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <h4>{post.name}</h4>
            </div>
            <p>{post.text}</p>
            {post.image && <img src={post.image} alt="Post Image" />}
            <div className="post-actions">
              <span onClick={() => handleLike(post.id)}>
                <FaThumbsUp /> {post.likes} Likes
              </span>
              <span onClick={() => handleComment(post.id)}>
                <FaComment /> {post.comments} Comments
              </span>
              <span onClick={() => handleShare(post.id)}>
                <FaShare /> {post.shares} Shares
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
