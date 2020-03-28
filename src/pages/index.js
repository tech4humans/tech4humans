import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Hero from '../components/hero';
import Layout from '../components/layout';

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
    <Layout>
      <SEO title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
