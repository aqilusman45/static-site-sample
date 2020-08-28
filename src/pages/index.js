import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { nodes } = data.allContentfulSamplePages
  return (
    <Layout>
      <SEO title="Home" />
      <ol>
        {nodes.map(page => {
          const {
            heading,
            slug,
            preview: { preview },
          } = page
          return (
            <li key={heading} className="mb-12">
              <div className="border .border-gray-900 rounded-lg p-3 bg-gray-100 font-sans">
                <h1 className="font-mono mb-3 text-gray-800 border-b-2 border-gray-500">
                  <Link to={slug}>{heading}</Link>
                </h1>
                <p className="text-gray-700 text-sm">{preview}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query SamplePagesList {
    allContentfulSamplePages {
      nodes {
        heading
        slug
        preview {
          preview
        }
      }
    }
  }
`
