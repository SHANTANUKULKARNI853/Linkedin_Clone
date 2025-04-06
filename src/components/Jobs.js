import React, { useEffect, useState } from "react";
import "./Jobs.css"

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://www.arbeitnow.com/api/job-board-api");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setJobs(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="jobs-page">
      <h2>Recommended Jobs</h2>

      {loading && <p>Loading jobs...</p>}
      {error && <p className="error-message">Error: {error}</p>}

      {!loading && !error && (
        <div className="job-list">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div key={job.slug} className="job-card">
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.company_name}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <a href={job.url} target="_blank" rel="noopener noreferrer" className="apply-btn">
                  Apply Now
                </a>
              </div>
            ))
          ) : (
            <p>No jobs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Jobs;
