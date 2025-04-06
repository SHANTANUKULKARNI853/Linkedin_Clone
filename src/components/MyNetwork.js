import React, { useEffect, useState } from "react";
import "./MyNetwork.css";

const MyNetwork = () => {
  const [connections, setConnections] = useState([]);
  const [connectedPeople, setConnectedPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=12")
      .then((response) => response.json())
      .then((data) => {
        setConnections(
          data.results.map((user) => ({
            id: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`,
            jobTitle: "Software Engineer",
            location: user.location.city,
            profilePic: user.picture.large,
          }))
        );
      });
  }, []);

  const handleConnect = (user) => {
    setConnectedPeople([...connectedPeople, user]);
    setConnections(connections.filter((c) => c.id !== user.id));
  };

  return (
    <div className="network-page">
      {connectedPeople.length > 0 && (
        <>
          <h2>People you connected</h2>
          <div className="connections-list">
            {connectedPeople.map((user) => (
              <div key={user.id} className="connection-card connected">
                <img src={user.profilePic} alt={user.name} className="profile-pic" />
                <h3>{user.name}</h3>
                <p>{user.jobTitle}</p>
                <p>{user.location}</p>
                <span className="connected-text">✓ Connected</span>
              </div>
            ))}
          </div>
        </>
      )}

      <h2>People you may know</h2>
      <div className="connections-list">
        {connections.map((user) => (
          <div key={user.id} className="connection-card">
            <img src={user.profilePic} alt={user.name} className="profile-pic" />
            <h3>{user.name}</h3>
            <p>{user.jobTitle}</p>
            <p>{user.location}</p>
            <button className="connect-btn" onClick={() => handleConnect(user)}>
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNetwork;
