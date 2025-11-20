import React, { useEffect, useRef, useState } from "react";

const IndustrySection = () => {
  const [animate, setAnimate] = useState(false);
  const [animateNumbers, setAnimateNumbers] = useState(false);
  const [marketValues, setMarketValues] = useState([0, 0, 0]);
  const sectionRef = useRef(null);
  const chartRef = useRef(null);

  // Trigger animation only when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          setAnimateNumbers(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  // Animate market values on mount/when triggered
  useEffect(() => {
    if (!animateNumbers) return;

    const targets = [50, 180, 300];
    const interval = setInterval(() => {
      setMarketValues((prev) =>
        prev.map((val, i) => {
          const target = targets[i];
          if (val < target) return val + Math.ceil(target / 25);
          return target;
        })
      );
    }, 40);

    return () => clearInterval(interval);
  }, [animateNumbers]);

  const handleChartMouseEnter = () => {
    setAnimateNumbers(true);
    setMarketValues([0, 0, 0]);
  };

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "60px 8%",
        background: "#f9f6f2",
        borderRadius: "0",
        margin: "40px 0",
        borderTop: "1px solid #e7dcd1",
        borderBottom: "1px solid #e7dcd1",
      }}
    >
      {/* HEADER */}
      <div style={{ textAlign: "center", marginBottom: "45px" }}>
        <h2
          style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "2rem",
            color: "#8b5e3c",
            marginBottom: "10px",
          }}
        >
          Beauty & Wellness Growth
        </h2>

        <p style={{ color: "#5c4a3d", maxWidth: "760px", margin: "0 auto" }}>
          India’s beauty & wellness market is expanding rapidly, creating
          opportunities for trained professionals.
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        {/* LEFT — PREMIUM BAR CHART */}
        <div
          style={{
            background: "linear-gradient(145deg, #7B967A, #5c4a3d)",
            padding: "35px",
            borderRadius: "20px",
            color: "white",
            boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              marginBottom: "12px",
              fontWeight: 700,
            }}
          >
            Market Growth (Indicative)
          </h3>

          <p
            style={{
              fontSize: ".9rem",
              marginBottom: "20px",
              color: "#e9e9e9",
            }}
          >
            India’s beauty & wellness market has grown from ₹50 Cr (2019) to
            ₹300+ Cr (2025), with major demand for advanced skin, hair & laser
            experts.
          </p>

          {/* NUMBER LABELS */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0px",
              padding: "0 10px",
            }}
            onMouseEnter={handleChartMouseEnter}
          >
            {[
              { label: "₹", suffix: " Cr", year: "2019", index: 0 },
              { label: "₹", suffix: " Cr", year: "2022", index: 1 },
              { label: "₹", suffix: " Cr", year: "2025", index: 2 },
            ].map((item) => (
              <div key={item.index} style={{ textAlign: "center", width: "33%" }}>
                <strong style={{ fontSize: "1rem", display: "block" }}>
                  {item.label}
                  {marketValues[item.index]}
                  {item.suffix}
                </strong>
                <div
                  style={{
                    fontSize: ".8rem",
                    opacity: 0.8,
                    marginTop: "3px",
                  }}
                >
                  {item.year}
                </div>
              </div>
            ))}
          </div>

          {/* BAR CHART */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              height: "150px",
              marginTop: "20px",
              padding: "0 10px",
            }}
          >
            {/* Bar 1 */}
            <div
              style={{
                flex: 1,
                marginRight: "14px",
                height: animate ? "40px" : "0px",
                background: "linear-gradient(to top, #8b5e3c, #f9f6f2)",
                borderRadius: "40px 40px 0 0",
                transition: "height 1.1s ease",
              }}
            ></div>

            {/* Bar 2 */}
            <div
              style={{
                flex: 1,
                marginRight: "14px",
                height: animate ? "85px" : "0px",
                background: "linear-gradient(to top, #8b5e3c, #f9f6f2)",
                borderRadius: "40px 40px 0 0",
                transition: "height 1.3s ease",
              }}
            ></div>

            {/* Bar 3 */}
            <div
              style={{
                flex: 1,
                height: animate ? "130px" : "0px",
                background: "linear-gradient(to top, #8b5e3c, #f9f6f2)",
                borderRadius: "40px 40px 0 0",
                transition: "height 1.5s ease",
              }}
            ></div>
          </div>
        </div>

        {/* RIGHT SIDE — POINTS */}
        <div>
          {[
            "Rising awareness of skin, hair & body aesthetics driving consistent growth across metros and Tier-2 cities.",
            "Clinics & salons face shortage of trained professionals — creating high-paying jobs for qualified candidates.",
            "AngelLife’s curriculum ensures students graduate job-ready with clinical training.",
            "Career options include clinics, wellness centers, salons, freelancing & international placements.",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "14px",
                marginBottom: "20px",
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: `all ${0.6 + i * 0.2}s ease`,
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  background: "#8b5e3c",
                  borderRadius: "50%",
                  marginTop: "8px",
                  flexShrink: 0,
                }}
              ></span>
              <p style={{ color: "#3e2b23", fontSize: ".92rem", lineHeight: "1.6", margin: "0" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE FIX */}
      <style>
        {`
          @media (max-width: 850px) {
            div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default IndustrySection;
