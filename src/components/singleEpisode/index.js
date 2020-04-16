import React, { useState } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Player from './audioPlayer';
import Styles from './index.module.css';

const SingleEpisode = ({ anchorProps, mdxProps }) => {
  const [expanded, setExpanded] = useState(false);
  const { body, frontmatter: { shortName, links, note } } = mdxProps;
  const { title, contentSnippet, isoDate, enclosure: { url } } = anchorProps

  return (
    <div className={Styles.container}>
      <h3 className={Styles.title}>{title}</h3>
      <h4 className={Styles.subTitle}>{`${isoDate} | ${shortName}`}</h4>
      <Player src={url} episode={title} />
      <p className={Styles.content}>{contentSnippet}</p>
      {links &&
        <div className={Styles.links}>
          {links.map(link => <a href={link.url}>{link.name}</a>)}
        </div>
      }
      {
        note &&
        <div className={Styles.noteContainer}>
          <h3 className={Styles.noteLine}>Note:</h3>
          <p className={Styles.note}>{note}</p>
        </div>
      }
      {body &&
        <>
          <button className={Styles.button} onClick={() => setExpanded(!expanded)} >{expanded ? "Hide Transcript" : "Show Transcript"}</button>
          {expanded && <div className={Styles.content}>
            <MDXRenderer>{body}</MDXRenderer>
          </div>}
          {expanded && <button className={Styles.button} onClick={() => setExpanded(!expanded)} >Hide Transcript</button>}
        </>
      }
    </div>
  )
};

export default SingleEpisode;