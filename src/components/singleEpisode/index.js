import React, { useRef } from 'react';
import Player from './audioPlayer';
import Styles from './index.module.css';

const SingleEpisode = ({ anchorProps, episodeProps }) => {
  const { shortName, additionalContent, note } = episodeProps;
  const { title, contentSnippet, isoDate, enclosure: { url } } = anchorProps
  const createMarkup = (input) => {
    return { __html: input }
  }
  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>{title}</h3>
      <h4 className={Styles.subTitle}>{`${isoDate} | ${shortName}`}</h4>
      <Player src={url} episode={title} />
      <p className={Styles.content}>{contentSnippet}</p>
      {additionalContent &&
        <div className={Styles.links} dangerouslySetInnerHTML={createMarkup(additionalContent)} />
      }
      {note && <p> note </p>}
    </div>
  )
};

export default SingleEpisode;