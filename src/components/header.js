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
          <nav>
            <Link
              to="/tags"
              style={{
                color: `inherit`,
                textDecoration: `none`,
              }}
            >
              #Tags
            </Link>

            <Link
              to="/contact"
              style={{
                color: `inherit`,
                textDecoration: `none`,
              }}
            >
              #Contacto
            </Link>
          </nav>
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
