import React from 'react';
import Styles from './index.module.css';
import BottomLogo from '../../images/bottomLogo.png';
import SocialNav from '../hero/socialNav';
import socialStyles from './footerSocialNav.module.css';

const Footer = () => {
  return (
    <footer className={Styles.container}>

      <img className={Styles.logo} src={BottomLogo} alt="Tech4Humans Logo" />
      <SocialNav Styles={socialStyles} />
      <p className={Styles.footer}>
        TECH4HUMANS© {new Date().getFullYear()}, Built with
      {` `}
        <a className={Styles.gatsby} href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer;
