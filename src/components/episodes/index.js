import React from 'react';
import { Link } from 'gatsby'
import Styles from './index.module.css';
import Speaker from '../../icons/speaker.svg'

const Episodes = ({ episodeData }) => {
  return (
    <div>
      {episodeData.map(({ node: episode }, index) => {
        const { title, contentSnippet, isoDate } = episode;
        const slug = title.replace(/\s/g, '');
        const currentEpisode = index - 1;
        let episodeText
        episodeText = 'Trailer';
        if (currentEpisode >= 0) episodeText = `Episode ${currentEpisode}`

        return (
          <div className={Styles.container}>
            <h3 className={Styles.title} >{title}</h3>
            <h4 className={Styles.subTitle} >{isoDate} | {episodeText}</h4>
            <p className={Styles.content}>{contentSnippet}</p>
            <div className={Styles.linkWrapper}>
              <Link className={Styles.link} to={slug}>
                <div className={Styles.listen}>
                  <Speaker className={Styles.speaker} />
                  <p className={Styles.buttonText}>Listen</p>
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Episodes;
