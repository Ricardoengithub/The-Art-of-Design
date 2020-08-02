import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { FaTimes, FaSearch } from "react-icons/fa"
import './Search.css'

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }    
    this.reset = this.reset.bind(this);
  }

  reset(e){
      e.preventDefault();
      this.setState({
        query: ``,
        results: [],          
      })
  }

  render() {
    return (
      <div id="search">
            <div id="search-bar">
                <input type="text" value={this.state.query} onChange={this.search} />
                {this.state.query === `` ? <FaSearch className="fa fa-search"   /> : <FaTimes className="fa fa-times" onClick={e => this.reset(e)}/>}
            </div>

                    
            
        <ul>
          {this.state.results.map(page => (
            <li key={page.id} onClick={e => this.reset(e)}>
              <Link to={page.path + "#topp"}>{page.title}</Link>
              {": " + page.tags.join(`,`)}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true})
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}   
