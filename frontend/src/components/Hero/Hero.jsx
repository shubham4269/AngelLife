import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HeroSection.css";

const HeroSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get("https://angellife-backend.onrender.com/api/notices");
        setNotices(res.data);
      } catch (error) {
        console.error("Error fetching notices:", error);
      }
    };
    fetchNotices();
  }, []);

  return (
    <section className="hero-wrapper">
      {/* Left: Hero */}
      <div className="hero-left">
        <h1 className="hero-heading">
          Empowering Minds, <br /> Inspiring Futures
        </h1>
        <p className="hero-subtext">
          At <strong>Angel Life International Institute</strong>, we nurture
          talent and inspire excellence through world-class education and
          values-driven learning.
        </p>

        <div className="hero-buttons">
          <a className="btn primary" href="/apply">Apply Now</a>
           <a href="/download-brochure" className="btn outline">
          Download Brochure
        </a>
        </div>
      </div>

      {/* Right: Notices */}
      <div className="hero-right">
        <div className="notice-box">
          <h3 className="notice-title">Latest Announcements</h3>
          <div className="notice-list">
            {notices.length > 0 ? (
              notices.map((n) => (
                <div key={n._id} className="notice-item">
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
    </section>
  );
};

export default HeroSection;


