import React from "react"
import { graphql, Link } from "gatsby"
import {
  Post,
  BlogPost,
  Navigation,
  ButtonNavigation,
} from "../styles/styles"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Share from "./share"

const Template = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter
  const title = post.title
  const date = post.date
  const html = data.markdownRemark.html
  const { next, prev } = pageContext
  const myUrl = data.site.siteMetadata.siteUrl + post.path

  return (
    <Layout>
      <SEO
        title={title}
        description={post.excerpt}
        image={post.srcPath}
        pathname={myUrl}
      />
      <Post>
        <h1 id="topp">{title}</h1>
        <Share url={myUrl} />
        <small>
          <em>{date}</em>
        </small>
        <BlogPost>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPost>
        <Navigation>
          {prev && (
            <ButtonNavigation>
              <Link to={prev.frontmatter.path}>Previous</Link>
            </ButtonNavigation>
          )}
          {next && (
            <ButtonNavigation>
              <Link to={next.frontmatter.path}>Next</Link>
            </ButtonNavigation>
          )}
        </Navigation>
      </Post>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!) {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM, DD, YYYY")
        author
        path
        tags
        excerpt
        srcPath
      }
    }
  }
`

export default Template
