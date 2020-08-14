import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { LPosts, PostCard } from "../styles/styles"
import SEO from "../components/seo"

const LastPosts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: frontmatter___date }
          limit: 4
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
                tags
                excerpt
                color
                author
                keywords
                srcPath {
                  childImageSharp {
                    fluid(quality: 100, maxWidth: 300, maxHeight: 220) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => {
      const { edges } = data.allMarkdownRemark
      return (
        <LPosts>
          <SEO title="The Art of design" description="A design articles site." />
            {edges.map((edge, index) => {
              const { frontmatter } = edge.node
              return (
                <PostCard>
                  <Link to={frontmatter.path + "#topp"} key={index}>
                  <h2 style={{margin: 10}}><em>{frontmatter.title}</em></h2>
                  <Img
                    fluid={frontmatter.srcPath.childImageSharp.fluid}
                    alt="A corgi smiling happily"
                    backgroundColor="black"
                    className="imagen"
                    />
                    <small>{frontmatter.date}</small><br/>
                    <h4 style={{margin: 10, fontFamily: `cursiz`}}>{frontmatter.excerpt}</h4>
                    <em>{frontmatter.keywords.map((keyw) => "#" + keyw + " ")}</em>
                  </Link>
                </PostCard>
              )
            })}
        </LPosts>
      )
    }}
  />
)

export default LastPosts
