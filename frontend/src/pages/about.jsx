import React from "react";
import styles from "./about.module.css";
import CTAButton from "../components/CTAButton/CTAButton";
import Layout from "../layout/Layout";


const About = () => {
  return (
    <Layout>
    <section className={styles.aboutSection}>
      {/* ===== Brand Story ===== */}
      <div className={styles.brandStory}>
        <h2>Our Story</h2>
        <p>
          AngelLife International Institute stands as Bharat’s most trusted and
          awarded aesthetics and wellness education brand. With over two decades
          of excellence under the visionary leadership of{" "}
          <strong>Dr. Shashank Kharabanda</strong>, the institute has become a
          global name in cosmetology, dermatology, and aesthetic training.
        </p>
        <p>
          With centers across India and Africa, AngelLife continues to transform
          aspiring professionals into industry leaders through internationally
          certified programs, advanced clinical exposure, and a future-ready
          learning ecosystem.
        </p>
      </div>

      {/* ===== Awards Timeline (Animated) ===== */}
      <div className={styles.awards}>
        <h2>Our Journey of Recognition</h2>
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineTrack}>
            {[
              { year: "2019", text: "Dynamic Awards: Top Brand in Aesthetics & Wellness" },
              { year: "2020", text: "GTF Award for Top Skin & Laser Learning Center" },
              { year: "2021", text: "International Excellence Recognition" },
              { year: "2022", text: "Honored by Ms. Neha Dhupia" },
              { year: "2023", text: "Recognized by Ms. Malaika Arora" },
              { year: "2024", text: "Awarded by Ms. Tamanna Bhatia" },
              { year: "2025", text: "Emerging Global Leader in Aesthetic Education" },
            ].map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <span className={styles.year}>{item.year}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Leadership ===== */}
      <div className={styles.leadership}>
        <h2>Our Leadership</h2>
        <div className={styles.leaderCard}>
          
            <h3>Dr. Shashank Kharabanda</h3>
            <p>Founder & Managing Director – AngelLife International Institute</p>
            <p>
              A distinguished speaker, author, and visionary in global aesthetics,
              Dr. Shashank’s mission is to redefine aesthetic education with a
              student-centric, innovation-driven approach aligned with
              international standards.
            </p>
          </div>
        </div>
    </section>
    </Layout>
  );
};

export default About;
