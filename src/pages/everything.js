import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { TagsStyle } from "../styles/styles"

const Everything = ({ data }) => {
  const { edges  } = data.allMarkdownRemark
  return (
    <Layout>
      <TagsStyle>
        <SEO title={"Everything"} />
        <h3>Estos son todos los posts:</h3>
        <ul>
          {edges.map(({ node }) => {
            return (
              <li key={node.frontmatter.title}>
                <Link to={node.frontmatter.path + "#topp"}>{node.frontmatter.title} - <small style={{color: `black`}}>{node.frontmatter.date}</small></Link>
              </li>
            )
          })}
        </ul>
        {/*
                This links to a page that does not yet exist.
                You'll come back to it!
              */}
        <Link to="/tags">
          <h4>All tags</h4>
        </Link>
      </TagsStyle>
    </Layout>
  )
}

export const pageQuery = graphql`
  query{
    allMarkdownRemark(
        limit: 2000
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
    }
  }
`
export default Everything
