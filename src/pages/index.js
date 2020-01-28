import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Song from "../../data/music/resurrection.mp3"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query musicQuery {
    allMusicJson {
      edges {
        node {
          title
      }
    }
  }
}
  `)
  const musicData = data.allMusicJson.edges;
  return (
    <>
      <SEO title="Home" />
      {musicData.map(({ node: track }) => {
        const title = track.title
        return (
          <>
            <h1>{title}</h1>
            <audio controls src={`${Song}`}></audio>
          </>
        )
      })}
    </>
  )
}

export default IndexPage
