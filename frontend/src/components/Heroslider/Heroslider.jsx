import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroBanner from "../../assets/HeroBanner.png";

function Heroslider() {
  const navigate = useNavigate();
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);

  // Trigger animation on page load
  useEffect(() => {
    setAnimateNumbers(true);
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (!animateNumbers) return;

    const targets = [20, 90, 100];
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const target = targets[i];
          if (count < target) return count + Math.ceil(target / 20);
          return target;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, [animateNumbers]);

  const handleMouseEnter = () => {
    setAnimateNumbers(true);
    setCounts([0, 0, 0]);
  };

  const images = [
    "/Images/B5.jpg",
    "/Images/B2.jpg",
    "/Images/B1.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        className="hero-premium"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 8%",
          paddingTop: "100px",
          position: "relative",
          overflow: "hidden",
          margin: 0,
        }}
      >
        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.70)",
            backdropFilter: "blur(2px)",   
            WebkitBackdropFilter: "blur(2px)",
            zIndex: 1,
          }}
        ></div>

        {/* HEADING */}
        <div
          style={{
            fontSize: "3rem",
            textTransform: "uppercase",
            fontWeight: "00",
            color: "#edfeecff",
            marginBottom: "10px",
            textShadow: "0 2px 6px rgba(123, 150, 122, 0.5)",
            textAlign: "center",
             position: "relative",   // ✅ ADDED — required for zIndex to work
             zIndex: 5,         
          }}
        >
          <h3>  ANGELLIFE INTERNATIONAL INSTITUTE</h3>
        </div>

        <div
          className="hero-container"
          style={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
            color: "white",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "2.4rem",
                lineHeight: "1.3",
                marginBottom: "14px",
                textShadow: "0 3px 8px rgba(216, 164, 20, 0.8)",
              }}
            >
              Build Your Global Career in Aesthetics & Cosmetology
            </h1>

            <p
              style={{
                fontSize: "1rem",
                color: "#f5f5f5",
                marginBottom: "20px",
                maxWidth: "500px",
              }}
            >
              UGC-Recognized Degrees • International Faculty • Advanced Clinics •
              1000+ Successful Students
            </p>

            {/* USP */}
            <div style={{ marginBottom: "25px" }}>
              {[
                "Hands-on Training on US-FDA Approved Machines",
                "Govt. Certified & ISO Accredited Institute",
                "Live Patient/Client Practice Sessions",
                "India + International Centers",
              ].map((t, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    marginBottom: "8px",
                    fontSize: ".9rem",
                    color: "#f9f6f2",
                     fontWeight: "700"
                     
                  }}
                >
                  <span
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "#42240dff",
                      borderRadius: "50%",
                      flexShrink: 0,
                       marginTop: "4px"
                    }}
                  ></span>
                  <div style={{ lineHeight: "1.3" }}>{t}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT HERO CARD */}
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              padding: "50px",
              borderRadius: "18px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
              maxWidth: "500px",
            }}
          >
            <div
              style={{
                fontSize: "1.4rem",
                fontWeight: 600,
                marginBottom: "8px",
                textShadow: "0 3px 8px rgba(216, 164, 20, 0.8)",
              }}
            >
              Premium Aesthetics Education
            </div>

            <p
              style={{
                fontSize: ".9rem",
                marginBottom: "20px",
                color: "#f5f5f5",
                lineHeight: "1.6",
              }}
            >
              US-FDA Machines • Real Patients • International Mentors
            </p>

            {/* Counters */}
            <div
              style={{ display: "flex", gap: "20px", marginBottom: "20px" }}
              onMouseEnter={handleMouseEnter}
            >
              {[
                { count: 20, label: "Years of Leadership" },
                { count: 90, label: "Placement Success" },
                { count: 100, label: "International Awards" },
              ].map((item, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "#e7dcd1",
                    }}
                  >
                    {counts[i]}+
                  </div>
                  <div style={{ fontSize: ".95rem", opacity: 0.8 }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/courses")}
              style={{
                background: "#8b5e3c",
                color: "#fff",
                padding: "10px 18px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Explore Courses
            </button>
          </div>
        </div> {/* ✅ FIXED: Missing closing div added here */}

        {/* RESPONSIVE */}
        <style>
          {`
            @media (max-width: 850px) {
              .hero-container {
                grid-template-columns: 1fr !important;
                text-align: center;
              }
            }
          `}
        </style>
      </section>
    </>
  );
}

export default Heroslider;

