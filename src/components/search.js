import React, { Component } from "react"
import ReactDOM from 'react-dom';
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { SearchBar } from "../styles/styles"


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

  componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
  }



  handleClickOutside = event => {
      const domNode = ReactDOM.findDOMNode(this);

      if (!domNode || !domNode.contains(event.target)) {
          this.setState({
              query: ``,
              results: [],
          });
      }
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
      <SearchBar>
        <h2>Realiza una búsqueda de un objeto o lugar: </h2>
          <form>
            <input type="search" placeholder="Buscar..." value={this.state.query} onChange={this.search} id="search"/>
          </form>
          <ul id="resultados">
            {this.state.results.map(page => (
              // eslint-disable-next-line
              <Link to={page.path + "#topp"} key={page.id}>
              <li>
                {page.title}
                {": " + page.tags.join(`,`)}
              </li>
               </Link>
            ))}
          </ul>
        </SearchBar>
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
