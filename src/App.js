import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import RightSidebar from "./components/RightSidebar";
import "./App.css";
import Messages from "./components/Messages";
import MyNetwork from "./components/MyNetwork";
import Jobs from "./components/Jobs";

function App() {
  return (
    <Router>
      {/* Navbar is visible on all pages */}
      <Navbar />
      <Routes>
        {/* Home Page with Sidebar, Feed, and RightSidebar */}
        <Route 
          path="/" 
          element={
            <div className="app-body">
              <Sidebar />
              <Feed />
              <RightSidebar />
            </div>
          } 
        />
        
        {/* Profile Page (doesn't include Sidebar, Feed, or RightSidebar) */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/mynetwork" element={<MyNetwork/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
