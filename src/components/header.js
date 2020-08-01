import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import './Header.css'

const Header = ({ data, siteTitle }) => (
  <header
  >
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
      <h4 id="head-title" style={{ margin: 0 }}>
          {/* {siteTitle} */}
          The art of design
      </h4>
        </Link>

        <Link 
        to="/tags"
        style={{
          color: 'rgb(136, 136, 136)',
          textDecoration: `none`,
        }}
        >
      <h4 id="head-topics" style={{ margin: 0 }}>
          #Topics
      </h4>
        </Link>
    </div>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
