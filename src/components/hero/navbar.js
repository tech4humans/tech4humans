import React from 'react'
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <button className={styles.button}>Episodes</button>
    <button className={styles.button}>About Us</button>
  </nav>
);

export default Navbar;
