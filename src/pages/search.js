import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Search from "../components/search";


const SearchPage = ({data}) => (
  <Layout>
    <SEO title={"Buscar"} />
    <Search searchIndex={data.siteSearchIndex.index} />
  </Layout>
)

export const query = graphql`
    query SearchPageQuery {
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
                        author
                        keywords
                    }
                }
            }
        }
        siteSearchIndex {
            index
        }
    }
`

export default SearchPage