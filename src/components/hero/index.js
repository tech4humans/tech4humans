import React from 'react';
import Logo from '../../images/Logo.png'
import Styles from './index.module.css';
import SocialNav from './socialNav';


const Hero = () => (
  <>
    <div className={Styles.headerWrapper}>
      <img className={Styles.heroImage} src={Logo} alt="Hero Image Banner" />
      <h1 className={Styles.header}> TECH4HUMANS </h1>
    </div>
    <SocialNav />
  </>
);

export default Hero;