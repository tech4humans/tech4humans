import React from 'react';
import Twitter from '../../images/twitter.svg';
import GooglePlay from '../../images/googleplay.svg';
import Rss from '../../images/rss.svg';
import Itunes from '../../images/itunes.svg';
import Spotify from '../../images/spotify.svg'
import Styles from './socialNav.module.css';

const iconArray = [Twitter, GooglePlay, Spotify, Itunes, Rss];

const SocialNav = () => {
  return (
    <>
      <h3 className={Styles.header}>Creating a positive impact on humanity</h3>
      <nav className={Styles.nav}>
        {iconArray.map(icon =>
          <button className={Styles.icon}>
            <img className={Styles.iconImage} src={icon} />
          </button>)
        }
      </nav>
    </>
  )
}

export default SocialNav;