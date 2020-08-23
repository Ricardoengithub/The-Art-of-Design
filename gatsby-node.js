/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const _ = require("lodash")
const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }

    type Frontmatter {
      title: String!
      srcPath: String
      excerpt: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (node.internal.type === "MarkdownRemark" && node.frontmatter.srcPath !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.srcPath, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's redux store
    })

    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve("src/templates/blogPost.js")
    const tagTemplate = path.resolve("src/templates/tags.js")
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
              edges {
                node {
                  frontmatter {
                    path
                    title
                    tags
                  }
                }
              }
            }
            tagsGroup: allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___tags) {
                fieldValue
              }
            }
          }
        `
      ).then((result) => {
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach(({ node }, index) => {
          const path = node.frontmatter.path
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
          resolve()
        })

        // Extract tag data from query
        const tags = result.data.tagsGroup.group
        // Make tag pages
        tags.forEach((tag) => {
          createPage({
            path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
            component: tagTemplate,
            context: {
              tag: tag.fieldValue,
            },
          })
        })
      })
    )
  })
}
