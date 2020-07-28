import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
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
          {siteTitle}
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
    <div id="navbar">
				<ul>
          <li><Link to="/">Home</Link></li>
					<li><Link to="/tags/architecture">Architecture</Link></li>
					<li><Link to="/tags/technology">Technology</Link></li>
					<li><Link to="/tags/tools"> Tools</Link></li>
					<li><Link to="/tags/ux">UX</Link></li>
					
				</ul>
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
