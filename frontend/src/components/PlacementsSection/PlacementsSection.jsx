import React, { useEffect, useState } from "react";

const PlacementsSection = () => {
  const stats = [
    { label: "Placement Assistance", value: 90, suffix: "%" },
    { label: "Successful Alumni", value: 1000, suffix: "+" },
    { label: "Centers & Networks", value: 2, suffix: " Regions" },
  ];

  // Animated Counter Logic
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (!shouldAnimate) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((count, i) => {
          const target = stats[i].value;
          if (count < target) return count + Math.ceil(target / 40);
          return target;
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, [shouldAnimate, stats]);

  const handleStatsMouseEnter = () => {
    setShouldAnimate(true);
    setCounts([0, 0, 0]);
  };

  return (
    <section
      style={{
        padding: "60px 0",
        background: "#f9f6f2",
        margin: "50px 0",
        borderRadius: "0",
        boxShadow: "0 8px 26px rgba(139,94,60,0.15)",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        borderTop: "1px solid #d4c4b0",
        borderBottom: "1px solid #d4c4b0",
      }}
    >
      {/* INNER WRAPPER WITH PADDING */}
      <div style={{ padding: "0 8%" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2rem",
            color: "#8b5e3c",
            marginBottom: "8px",
          }}
        >
          Placements & Career Outcomes
        </h2>
        <p style={{ color: "#5c4a3d", fontSize: "1rem" }}>
          Strong placement support, hiring partners and alumni network to build
          your successful global career.
        </p>
      </div>

      {/* Content Grid */}
      <div
        className="placements-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {/* LEFT SIDE */}
        <div style={{ animation: "slideUp 1s ease forwards" }}>
          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              gap: "18px",
              marginBottom: "25px",
              flexWrap: "wrap",
            }}
            onMouseEnter={handleStatsMouseEnter}
          >
            {stats.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "18px 22px",
                  borderRadius: "14px",
                  textAlign: "center",
                  flex: "1 1 calc(33.3% - 18px)",
                  boxShadow: "0 4px 14px rgba(139,94,60,0.12)",
                  minWidth: "140px",
                }}
              >
                <strong style={{ fontSize: "1.4rem", color: "#8b5e3c" }}>
                  {counts[i]}
                  {counts[i] === item.value ? item.suffix : ""}
                </strong>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#3e2b23",
                    marginTop: "5px",
                    fontWeight: "600",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <h3
            style={{
              fontSize: "1rem",
              color: "#8b5e3c",
              marginBottom: "10px",
              fontWeight: 600,
            }}
          >
            Career Paths
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {[
              "Aesthetic Therapist",
              "Laser Technician",
              "Cosmetologist",
              "Makeup Artist",
              "Nutrition Coach",
              "Entrepreneur / Clinic Owner",
            ].map((path, i) => (
              <div
                key={i}
                style={{
                  background: "#e7dcd1",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  color: "#8b5e3c",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  animation: "fadeIn 1s ease forwards",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    background: "#8b5e3c",
                    borderRadius: "50%",
                  }}
                ></span>
                {path}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(139,94,60,0.15)",
            animation: "slideUp 1.2s ease forwards",
          }}
        >
          <h3 style={{ color: "#8b5e3c", marginBottom: "10px" }}>
            Hiring Partners & Internship Networks
          </h3>
          <p style={{ fontSize: ".9rem", color: "#5c4a3d", marginBottom: "15px" }}>
            Tie-ups with dermatology clinics, premium salons, wellness centers
            and aesthetic chains.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {[
              "Dermatology Clinics",
              "Laser & Skin Centers",
              "Premium Salons",
              "Medi-Spas",
              "Wellness Retreats",
            ].map((tag, i) => (
              <div
                key={i}
                style={{
                  background: "#f9f6f2",
                  padding: "10px 16px",
                  borderRadius: "12px",
                  fontSize: ".8rem",
                  fontWeight: 600,
                  color: "#3e2b23",
                  border: "1px solid rgba(139,94,60,0.25)",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: ".78rem",
              color: "#777",
            }}
          >
            Dedicated placement cell, interview prep & portfolio support to help
            you step confidently into the industry.
          </p>
        </aside>
      </div>

      {/* Animations */}
      <style>
        {`
        @keyframes slideUp {
          from { opacity:0; transform:translateY(40px); }
          to { opacity:1; transform:translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity:0; }
          to { opacity:1; }
        }

        /* FULL RESPONSIVENESS */
        @media(max-width: 900px) {
          .placements-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media(max-width: 600px) {
          section {
            padding: 40px 6% !important;
          }

          h2 {
            font-size: 1.6rem !important;
          }
        }

        @media(max-width: 420px) {
          strong {
            font-size: 1.1rem !important;
          }
        }
      `}
      </style>
      </div>
    </section>
  );
};

export default PlacementsSection;

