import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { TagsStyle } from "../styles/styles"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <TagsStyle>
        <h3>Realiza una búsqueda de un objeto o lugar: </h3>
        <form>
          <input
            type="search"
            placeholder="Ejemplo: Lápiz"
            value={this.state.query}
            onChange={this.search}
          />
        </form>
        <ul>
          {this.state.results.map((page) => (
            // eslint-disable-next-line
            // <Link to={page.path + "#topp"} key={page.id}>
            //   <li>
            //     {page.title}
            //     {": " + page.tags.join(`,`)}
            //   </li>
            // </Link>

            <li key={page.title}>
              <Link to={page.path + "#topp"}>
                {page.title}{" "}
                <small style={{ color: `black` }}>{": #" + page.tags.join(`,`)} - {page.date}</small>
                
              </Link>
            </li>
          ))}
        </ul>
      </TagsStyle>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = (evt) => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
