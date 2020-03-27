import React from 'react';
import styles from './Nav.module.css';

export const Nav = props => {
    return (
        <div className={styles.navList}>
            <h1 className={styles.navTitle}>Hunger Killer</h1>
            <a href="#" className={styles.navLink}>Home</a>
            <a href="#" className={styles.navLink}>Settings</a>
            <a href="#" className={styles.navLink}>Credits</a>
            <a href="#" className={styles.navLink}>Contact</a>
        </div>
    );
};