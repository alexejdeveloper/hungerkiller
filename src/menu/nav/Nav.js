import React from 'react';
import styles from './Nav.module.css';
import { Link } from 'react-router-dom';
import logo from '../icon/menu.png';

export const Nav = (props) => {
  return (
    <div className={styles.navList}>
      <h1 className={styles.navTitle}>Hunger Killer</h1>
      <Link to="/hungerkiller/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/about" className={styles.navLink}>
        About
      </Link>
      <Link to="/contact" className={styles.navLink}>
        Contact
      </Link>
      <div className={styles.logo_container}>
        <img src={logo} alt="logo" className={styles.logo} />
      </div>
    </div>
  );
};
