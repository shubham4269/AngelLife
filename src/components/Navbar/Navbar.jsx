import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <img src="/Images/Logo2.png" alt="Logo" className={styles.logo} />
        </Link>

        <nav className={`${styles.navLinks} ${open ? styles.active : ''}`}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/about" className={styles.link}>About Us</Link>
          <Link to="/academics" className={styles.link}>Academics</Link>
          <Link to="/blog" className={styles.link}>Blog</Link>
          <Link to="/contact" className={styles.link}>Contact</Link>
        </nav>

        <button 
          className={styles.menuToggle} 
          onClick={() => setOpen(!open)} 
          aria-label="menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
