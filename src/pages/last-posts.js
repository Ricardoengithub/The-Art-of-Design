import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Posts, PostCard } from "../styles/styles"
import SEO from "../components/seo"

const LastPosts = ({ className, image, url, title }) => (
    <StaticQuery
      query={graphql`
        query {
            allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }, limit: 4) {
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
                      srcPath {
                        childImageSharp {
                            fluid(quality: 100, maxWidth: 950) {
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
      render={data => {

        const { edges } = data.allMarkdownRemark
        return (
        <div>
            <SEO title="The Art of design" description="A design articles site." />
                <Posts>
                {edges.map((edge, index) => {
                const { frontmatter } = edge.node
                return (
                    <PostCard>
                      <Link to={frontmatter.path + "#topp"} key={index}>
                        <Img
                          fluid={frontmatter.srcPath.childImageSharp.fluid}
                          alt="A corgi smiling happily"
                          backgroundColor="black"
                        />
                            <div className="info">
                                <h1>{frontmatter.title}</h1>
                                <h6><small>{frontmatter.date}</small></h6>
                                <p>{frontmatter.tags.map((tag) => "#" + tag + " ")}</p>
                            </div>
                      </Link>
                      </PostCard>
                )
                })}
                </Posts>
            </div>
        )
      }}
    />
  )


export default LastPosts
