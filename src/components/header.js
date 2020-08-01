import { Link } from 'gatsby';
import PropTypes from "prop-types"
import React from "react"

import Image from '../components/image'
import './Header.css'


const Header = ({ siteTitle }) => (
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
          <div id="head-title-block">
            <Image />
            <h5 id="head-title">{siteTitle}</h5>
          </div>
        </Link>

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
)


Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: `The Art of Design`,
}

export default Header
