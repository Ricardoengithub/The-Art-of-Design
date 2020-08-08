import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import { FaHashtag } from "react-icons/fa"

import { Hashtag } from "../styles/styles"
// Utilities
import kebabCase from "lodash/kebabCase"

const Hashtags = () => (
  <StaticQuery
    query={graphql`
      query pageQuery {
        allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={(data) => (
      <Hashtag>
        <h2>Elige uno de los siguientes temas que te interese.</h2>
        <h3>Te ayudaremos a encontrar lecturas interesantes sobre ellos.</h3>
        <ul>
          {data.allMarkdownRemark.group.map((tag) => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
              <li>
                <FaHashtag /> {tag.fieldValue}
              </li>
            </Link>
          ))}
        </ul>
        <h4>También puedes revisar los últimos artículos:</h4>
        <br />
      </Hashtag>
    )}
  />
)

Hashtags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
  }),
}

export default Hashtags
