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
            <li key={heading}>
              <div>
                <h1>
                  <Link to={slug}>{heading}</Link>
                </h1>
                <p>{preview}</p>
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
