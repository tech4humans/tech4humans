import React from "react"
import { Link, graphql } from "gatsby"
import Hero from '../components/hero';
import Layout from '../components/layout';
import About from '../components/about';

import SEO from "../components/seo"


const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
    </Layout>
  )
}

// export const query = graphql`
//   query EpisodesQuery {
//   allAnchorEpisode {
//     edges {
//       node {
//         title
//         contentSnippet
//         isoDate(formatString: "MMMM D, YYYY")
//       }
//     }
//   }
// }
// `

export default AboutPage

