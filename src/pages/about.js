import React from "react"
import Hero from '../components/hero';
import Layout from '../components/layout';
import About from '../components/about';

import SEO from "../components/seo"


const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
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

