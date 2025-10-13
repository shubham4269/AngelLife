import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <div className={styles.badge}>ANGELLIFE • SINCE 2017</div>
            <h1 className={styles.title}>
              AngelLife — Join 1000+ Certified Professionals
            </h1>
            <p className={styles.subtitle}>
              Upskill with flagship programs, expert faculty, and 90% placement
              support.
            </p>

            <div className={styles.buttons}>
              <a href="/contact" className={`${styles.btn} ${styles.btnPrimary}`}>
                Apply Now
              </a>
              <a
                href={`https://wa.me/919429691807?text=${encodeURIComponent(
                  "Hi, I want to know about courses"
                )}`}
                target="_blank"
                rel="noreferrer"
                className={`${styles.btn} ${styles.btnLight}`}
              >
                WhatsApp
              </a>
              <a
                href="/brochure.pdf"
                className={`${styles.btn} ${styles.btnOutline}`}
              >
                Download Brochure
              </a>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.curveWrap}>
              <img
                src="/images/hero-people.jpg"
                alt="people"
                className={styles.heroImg}
              />
              <svg
                className={styles.curveSvg}
                viewBox="0 0 400 120"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  id="curve"
                  d="M10,60 A170,60 0 0 1 390,60"
                  fill="none"
                  stroke="#0f766e"
                  strokeWidth="2"
                />
                <text dy="-10">
                  <textPath href="#curve" startOffset="10%">
                    SKIN • HAIR • LASERS • BODY
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

