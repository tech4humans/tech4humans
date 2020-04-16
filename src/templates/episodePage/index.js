import React from 'react';
import { graphql } from 'gatsby';
import SingleEpisode from '../../components/singleEpisode';

import Hero from '../../components/hero';
import Layout from '../../components/layout';

import SEO from "../../components/seo"


const EpisodePage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.allMdx.edges[0].node.shortName} image={data.allAnchorEpisode.edges[0].node.itunes.image} />
      <Hero />
      <SingleEpisode
        anchorProps={data.allAnchorEpisode.edges[0].node}
        mdxProps={data.allMdx.edges[0].node}
      />
    </Layout>
  )
}

export const query = graphql`
  query SingleEpisodesQuery($title: String!, $slug: String!) {
  allAnchorEpisode(filter: {title: {eq: $title}}) {
    edges {
      node {
        title
        contentSnippet
        isoDate(formatString: "MMMM D, YYYY")
        enclosure {
          url
        }
        itunes {
          image
        }
      }
    }
  }
  allMdx(filter: {frontmatter: {episode: {eq: $slug}}}) {
    edges {
      node {
        body
        frontmatter {
          episode
          shortName
          note
          links {
            name
            url
          }
        }
      }
    }
  }
}


`

export default EpisodePage

