import React from 'react';
import { graphql } from 'gatsby';
import SingleEpisode from '../../components/singleEpisode';

import Hero from '../../components/hero';
import Layout from '../../components/layout';

import SEO from "../../components/seo"


const EpisodePage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Trailer" />
      <Hero />
      <SingleEpisode />
    </Layout>
  )
}

export const query = graphql`
  query SingleEpisodesQuery($title: String!) {
  allAnchorEpisode(filter: {title: {eq: $title}}) {
    edges {
      node {
        title
        contentSnippet
        isoDate(formatString: "MMMM D, YYYY")
        enclosure {
          url
        }
      }
    }
  }
}
`

export default EpisodePage

