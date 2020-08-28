import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const SamplePageTemplate = ({ data }) => {
  const {
    heading,
    sampleContent: { json },
  } = data.allContentfulSamplePages.nodes[0]

  return (
    <Layout>
      <SEO title={heading} />
      <h1>{heading}</h1>
      {documentToReactComponents(json, {})}
      <Link to="/" >Home</Link>
    </Layout>
  )
}

export default SamplePageTemplate

export const pageQuery = graphql`
  query SamplePage($id: String) {
    allContentfulSamplePages(filter: { contentful_id: { eq: $id } }) {
      nodes {
        heading
        sampleContent {
          json
        }
      }
    }
  }
`
