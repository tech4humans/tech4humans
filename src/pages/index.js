import React from "react"
import { Link, graphql } from "gatsby"
import Hero from '../components/hero';
import Layout from '../components/layout';
import Episodes from '../components/episodes';

import SEO from "../components/seo"


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" image="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/3206742/3206742-1585795503161-cb62cbb5cbca6.jpg" />
      <Hero />
      <Episodes episodeData={data.allAnchorEpisode.edges} />
    </Layout>
  )
}

export const query = graphql`
  query EpisodesQuery {
  allAnchorEpisode(sort: {fields: isoDate, order: DESC}) {
    edges {
      node {
        title
        contentSnippet
        isoDate(formatString: "MMMM D, YYYY")
        itunes {
          image
        }
      }
    }
  }
}


`

export default IndexPage

