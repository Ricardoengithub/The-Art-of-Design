import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { TagsStyle } from "../styles/styles"

const Tags = ({ pageContext, data }) => {
  console.log(data)
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount === 1 ? "Una" : totalCount} publicación${
    totalCount === 1 ? "" : "es"
  } en "${tag}"`
  return (
    <Layout>
      <TagsStyle>
        <SEO title={tag} />
        <h3>{tagHeader}</h3>
        <ul>
          {edges.map(({ node }) => {
            const { title } = node.frontmatter
            return (
              <li key={title}>
                <Link to={node.frontmatter.path + "#topp"}>{title}</Link>
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
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
