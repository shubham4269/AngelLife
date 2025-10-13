import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faAndroid } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {/* Contact Info */}
          <div className={styles.column}>
            <h3 className={styles.title}>Contact Us</h3>
            <p>📍 H.O - 1703 A Wing, Himalyan Heights, Wadala, Mumbai</p>
            <p>📞 +91 9429691807</p>
            <p>
              📧{' '}
              <a href="mailto:care@angellife.in" className={styles.link}>
                care@angellife.in
              </a>
            </p>
            <p>🕒 Open Hours: 10:30 AM - 07:30 PM (Daily)</p>
          </div>

          {/* Important Links */}
          <div className={styles.column}>
            <h3 className={styles.title}>Important Links</h3>
            <ul className={styles.linksList}>
              <li><a href="/treatments" className={styles.link}>Treatments</a></li>
              <li><a href="/gallery" className={styles.link}>Gallery</a></li>
              <li><a href="/franchise" className={styles.link}>Franchise Us</a></li>
            </ul>
          </div>

          {/* Newsletter & Socials */}
          <div className={styles.column}>
            <h3 className={styles.title}>Stay Connected</h3>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>

            <div className={styles.socials}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social}
              >
                <FontAwesomeIcon icon={faAndroid} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.bottom}>
          <p>© 2025 AngelLife. All Rights Reserved.</p>
          <p>
            Designed by <span className={styles.brand}>xyz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
