import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomePageStyle } from "../styles/styles"

import LastPosts from "./last-posts"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="The Art of design" description="A design articles site." />
      <HomePageStyle>
        <LastPosts />
      </HomePageStyle>
    </Layout>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    siteSearchIndex {
      index
    }
  }
`

export default IndexPage
