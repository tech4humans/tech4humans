import React from 'react'
import { Link } from 'gatsby';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav className={styles.nav}>
    <Link to="/" className={styles.link} activeClassName={styles.active}>Episodes</Link>
    <Link to="/about" className={styles.link} activeClassName={styles.active}>About Us</Link>
  </nav>
);

export default Navbar;
