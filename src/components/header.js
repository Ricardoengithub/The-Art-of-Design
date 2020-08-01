import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <header
  >
    <div
      id="head"
    >
      <h4 id="head-title" style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          The art of design
        </Link>
      </h4>

      <h4 id="head-topics" style={{ margin: 0 }}>
        <Link 
        to="/tags"
        style={{
          color: 'rgb(136, 136, 136)',
          textDecoration: `none`,
        }}
        >
          #Topics
        </Link>
      </h4>
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
