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

const Template = ({ data, pageContext }) => {
  const title = data.markdownRemark.frontmatter.title
  const date = data.markdownRemark.frontmatter.date
  const html = data.markdownRemark.html
  const { next, prev } = pageContext

  return (
    <Layout>
      <SEO
        title={title}
        description={data.markdownRemark.frontmatter.excerpt}
        image={data.markdownRemark.frontmatter.srcPath.childImageSharp.fluid}
        pathname={data.site.siteUrl + data.markdownRemark.frontmatter.path}
      />
      <Post>
        <h1 id="topp">{title}</h1>
        <small>
          <em>{date}</em>
        </small>
        <FeaturedImage>
          <Img
            fluid={data.markdownRemark.frontmatter.srcPath.childImageSharp.fluid}
            alt="A corgi smiling happily"
            className="fimage"
          />
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
      }
    }
  }
`

export default Template
