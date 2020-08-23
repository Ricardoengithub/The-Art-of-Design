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
        siteSearchIndex {
            index
        }
    }
`

export default SearchPage