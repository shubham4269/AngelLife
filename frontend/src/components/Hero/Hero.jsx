import React, { useEffect, useState } from "react";
import api from "../../api/api";
import "./HeroSection.css";

const HeroSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await api.get("/notices");
        setNotices(res.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchNotices();
  }, []);

  return (
    
      <div className="hero-wrapper">
      {/* Left: Hero */}
      <div className="hero-left">
        <h1 className="hero-heading">
          From Dreamer, <br /> to Professional
        </h1>
        <p className="hero-subtext">
          At <strong>Angel Life International Institute</strong>, we nurture
          talent and inspire excellence through world-class education and
          values-driven learning.
        </p>

        <div className="hero-buttons">
          <a className="btn primary" href="/apply">Apply Now</a>
          <a href="/download-brochure" className="btn outline">Download Brochure</a>
        </div>
      </div>

      {/* Right: Notices */}
      <div className="hero-right">
        <div className="notice-box">
          <h2 className="notice-title" id="notice-title">Latest Announcements</h2>
          <div className="notice-list">
            {notices.length > 0 ? (
              notices.map((n) => (
                <div key={n._id} className="notice-item" role="listitem">
                  <span className="dot"></span>
                  <p>{n.title}</p>
                </div>
              ))
            ) : (
              <p className="no-notice">No recent updates.</p>
            )}
          </div>
        </div>
      </div>
      </div>
   
  );
};

export default HeroSection;


