import { StaticQuery, graphql, Link } from 'gatsby';
import PropTypes from "prop-types"
import React from "react"

import Search from "./search"
import Image from './image'
import './Header.css'


const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header>
    <div
      id="head"
    >

        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: `none`,
          }}
        >
          <div id="head-title-block">
            <Image />
            <h5 id="head-title">{siteTitle}</h5>
          </div>
        </Link>

        <Search searchIndex={data.siteSearchIndex.index} />
        <Link 
        to="/tags"
        style={{
          color: 'rgb(136, 136, 136)',
          textDecoration: `none`,
        }}
        >
      <h5 id="head-topics" style={{ margin: 0 }}>
          #Tags
      </h5>
        </Link>
    </div>
      </header>
    )}
  />
)


Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `The Art of Design`,
}

export default Header
