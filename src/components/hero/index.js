import React from 'react';
import { Link } from 'gatsby';
import Logo from '../../images/toplogo.png'
import Styles from './index.module.css';
import SocialNav from './socialNav';
import NavBar from './navbar';
import SocialNavStyles from './socialNav.module.css'

const Hero = () => (
  <>
    <div className={Styles.headerWrapper}>
      <Link to="/">
        <img className={Styles.heroImage} src={Logo} alt="Hero Image Banner" />
      </Link>
    </div>
    <SocialNav Styles={SocialNavStyles} />
    <NavBar />
  </>
);

export default Hero;