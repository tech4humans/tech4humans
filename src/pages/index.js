import React from "react"
import { Link, graphql } from "gatsby"
import Hero from '../components/hero';
import Layout from '../components/layout';
import Episodes from '../components/episodes';

import SEO from "../components/seo"


const IndexPage = ({ data }) => {
  console.log('hello')
  return (
    <Layout>
      <SEO title="Home" image={data.allAnchorEpisode.edges[0].node.itunes.image} />
      <Hero />
      <Episodes episodeData={data.allAnchorEpisode.edges} />
    </Layout>
  )
}

export const query = graphql`
  query EpisodesQuery {
  allAnchorEpisode {
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

