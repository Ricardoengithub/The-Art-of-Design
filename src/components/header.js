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
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          TAD
        </Link>
      </h3>

      <h3 style={{ margin: 0 }}>
        <Link 
        to="/tags"
        style={{
          color: 'rgb(136, 136, 136)',
          textDecoration: `none`,
        }}
        >
          Topics
        </Link>
      </h3>
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
