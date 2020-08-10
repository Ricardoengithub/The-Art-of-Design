import React from "react"
import { graphql } from "gatsby"

import StyledBackgroundSection from "../components/background"
import Layout from "../components/layout"
import SEO from "../components/seo"

import LastPosts from "./last-posts"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="The Art of design" description="A design articles site." />
      <StyledBackgroundSection url="/tags" image={0} title={"#Tags"} />
      <StyledBackgroundSection url="/everything" image={1} title={"#Everything"} />
      <StyledBackgroundSection url="/buscar" image={2} title={"#Buscar"} />
      <LastPosts />
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
