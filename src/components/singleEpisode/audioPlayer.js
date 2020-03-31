import React, { useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './audio.css';
import Downlod from '../../icons/download.svg';
import Styles from './download.module.css';

const Player = ({ src, episode }) => {
  const audioRef = useRef(null);
  return (
    <>
      <AudioPlayer
        src={src}
        layout="horizontal-reverse"
        showSkipControls={false}
        showJumpControls={false}
        customVolumeControls={[]}
        customAdditionalControls={[]}
        ref={audioRef}
      />
      <a className={Styles.download} href={src} download={`${episode}.mp3`}>
        Download <Downlod className={Styles.icon} />
      </a>
      <p className={Styles.instructions}>(Right click, "Save Link As")</p>
    </>
  )
};

export default Player;
