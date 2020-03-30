import React from 'react';
import Twitter from '../../icons/twitter.svg';
import GooglePlay from '../../icons/googleplay.svg';
import Rss from '../../icons/rss.svg';
import Itunes from '../../icons/itunes.svg';
import Spotify from '../../icons/spotify.svg';

const iconData = [
  {
    name: 'Twitter',
    iconSvg: Twitter,
    url: 'https://twitter.com/Tech4humansio',
  },
  {
    name: 'Google Play',
    iconSvg: GooglePlay,
    url: 'https://twitter.com/Tech4humansio',
  },
  {
    name: 'Spotify',
    iconSvg: Spotify,
    url: 'https://open.spotify.com/show/3jiFb3y73lcuE2x094IRAo',
  },
  {
    name: 'Apple Podcast',
    iconSvg: Itunes,
    url: 'https://open.spotify.com/show/3jiFb3y73lcuE2x094IRAo',
  },
  {
    name: 'Rss',
    iconSvg: Rss,
    url: 'https://anchor.fm/s/13b5b018/podcast/rss',
  }
];


const SocialNav = ({ Styles }) => {
  return (
    <>
      <h3 className={Styles.header}>Creating a positive impact on humanity</h3>
      <nav className={Styles.nav}>
        {iconData.map(icon =>
          <a href={icon.url} className={Styles.icon}>
            <icon.iconSvg className={Styles.iconImage} />
          </a>)}
      </nav>
    </>
  )
}

export default SocialNav;