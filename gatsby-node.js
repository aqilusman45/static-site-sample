/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const samplePageTemplate = path.resolve(`src/templates/sample-pages.jsx`)

  const sampleQuery = await graphql(`
    query SamplePage {
      allContentfulSamplePages {
        nodes {
          slug
          contentful_id
        }
      }
    }
  `)

  sampleQuery.data.allContentfulSamplePages.nodes.map(page => {
    createPage({
      path: page.slug,
      component: samplePageTemplate,
      context: {
        id: page.contentful_id,
      },
    })
  })
}
