import React, { useState, useEffect } from "react";

const TrustTiles = () => {
  const awards = [
    {
      image: "/Images/2.png",
      caption: "National Award for Excellence — MS. TAMANNAH BHATIA",
    },
    {
      image: "/Images/3.png",
      caption: "Top Aesthetics Chain Award — MS. NEHA DHUPIA",
    },
    {
      image: "/Images/4.png",
      caption: "Global Standards in Aesthetic Science — MS. MALAIKA ARORA",
    },
    {
      image: "/Images/5.png",
      caption: "Top Skin, Laser & Beauty Courses — MS. SARA ALI KHAN",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === awards.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
  <section
    style={{
      width: "100%",
      maxWidth: "100%",
      padding: 0,
      margin: 0,
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        margin: "60px auto",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "700",
          color: "#8b5e3c",
          marginBottom: "25px",
          fontFamily: "Playfair Display, serif",
        }}
      >
        Our Awards & Recognitions
      </h2>

      {/* Image Wrapper */}
      <div
        style={{
          width: "100%",
          height: "450px",
          position: "relative",
          borderRadius: "16px",
          overflow: "hidden",

          background: "#f9f6f2",
          boxShadow: "0 8px 24px rgba(139,94,60,0.18)",
        }}
      >
        {awards.map((award, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              inset: 0,
              opacity: currentIndex === i ? 1 : 0,
              transition: "opacity 1.5s ease",
            }}
          >
            <img
              src={award.image}
              alt={award.caption}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",

                transform: currentIndex === i ? "scale(1.04)" : "scale(1)",
                transition: "transform 2s ease",
              }}
            />

            {/* Caption stays INSIDE image */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                padding: "22px 18px",
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2))",
                color: "#f5e9dd",
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "'Playfair Display', serif",
                textShadow: "0 2px 6px rgba(0,0,0,0.7)",
                letterSpacing: ".6px",
                opacity: currentIndex === i ? 1 : 0,
                transform:
                  currentIndex === i ? "translateY(0)" : "translateY(25px)",
                transition: "opacity 1.2s ease, transform 1.2s ease",
                boxSizing: "border-box",
              }}
            >
              {award.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default TrustTiles;





