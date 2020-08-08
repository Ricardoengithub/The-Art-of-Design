import { StaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"
import "./Header.css"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={(data) => (
      <header>
        <div id="head">
          <Link
            to="/"
            style={{
              color: "inherit",
              textDecoration: `none`,
            }}
          >
            <div id="head-title-block">
              <Image />
              <h4 id="head-title">{siteTitle}</h4>
            </div>
          </Link>

          <Link
            to="/tags"
            style={{
              color: `inherit`,
              textDecoration: `none`,
            }}
          >
            <h4 id="head-topics" style={{ margin: 0, color: `inherit` }}>
              #Tags
            </h4>
          </Link>
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `The Art of Design`,
}

export default Header
