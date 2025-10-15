import React from 'react';
import { Link } from 'react-router-dom';
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
              <li><Link to="/academics" className={styles.link}>Academics</Link></li>
              <li><Link to="/contact" className={styles.link}>Contact</Link></li>
              <li><Link to="/about" className={styles.link}>About Us</Link></li>
              <li><Link to="/apply" className={styles.link}>Apply Now</Link></li>
              <li><Link to="/download-brochure" className={styles.link}>Download Brochure</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div className={styles.column}>
            <h3 className={styles.title}>Legal & Support</h3>
            <ul className={styles.linksList}>
              <li><Link to="/faqs" className={styles.link}>FAQs</Link></li>
              <li><Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className={styles.link}>Terms of Use</Link></li>
              <li><Link to="/refund-policy" className={styles.link}>Refund Policy</Link></li>
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
          <p>© 2025 AngelLife International Institute. All Rights Reserved.</p>
          <div style={{ 
            marginTop: '10px', 
            fontSize: '0.85rem',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <Link to="/privacy-policy" className={styles.link} style={{ fontSize: '0.85rem' }}>
              Privacy Policy
            </Link>
            <span style={{ color: '#d8cfc8' }}>|</span>
            <Link to="/terms-of-use" className={styles.link} style={{ fontSize: '0.85rem' }}>
              Terms of Use
            </Link>
            <span style={{ color: '#d8cfc8' }}>|</span>
            <Link to="/refund-policy" className={styles.link} style={{ fontSize: '0.85rem' }}>
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
