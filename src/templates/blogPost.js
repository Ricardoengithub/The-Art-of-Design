import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Post,
  FeaturedImage,
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
        image={post.srcPath.childImageSharp.fluid}
        pathname={myUrl}
      />
      <Post>
        <h1 id="topp">{title}</h1>
        <Share url={myUrl} />
        <small>
          <em>{date}</em>
        </small>
        <FeaturedImage>
          <a href={post.photoRef}>
            <Img
              fluid={post.srcPath.childImageSharp.fluid}
              alt={post.photoBy}
              title={post.photoBy}
            />
          </a>
        </FeaturedImage>
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
        path
        tags
        excerpt
        srcPath {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        photoBy
        photoRef
      }
    }
  }
`

export default Template
