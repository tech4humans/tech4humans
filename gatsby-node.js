
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allAnchorEpisode {
      edges {
      node {
        title
      }
    }
  }
    }
  `)

  if (result.error) {
    reporter.panic("There was a problem loading your episode! Try again later!")
    return
  }

  const episodes = result.data.allAnchorEpisode.edges

  episodes.forEach(({ node: episode }) => {
    const { title } = episode;
    const slug = title.replace(/\s/g, '');

    actions.createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/episodePage/index.js"),
      context: { slug, title },
    })
  })
}