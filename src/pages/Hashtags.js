import React from 'react';
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import './Hashtags.css'
import { FaHashtag } from 'react-icons/fa';

// Utilities
import kebabCase from "lodash/kebabCase"

const Hashtags = () => (

    <StaticQuery query = {graphql`
        query pageQuery{
            allMarkdownRemark(limit: 2000) {
                group(field: frontmatter___tags) {
                fieldValue
                totalCount
                }
            }
        }
    `}
    render = {data => (
        <div id="hashtags">
        <h3>Elige uno de los siguientes temas que te interese.</h3>
        <h4>Te ayudaremos a encontrar lecturas interesantes sobre ellos.</h4>
        <ul>
            {data.allMarkdownRemark.group.map(tag => (
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}><li><FaHashtag /> {tag.fieldValue}</li></Link>
            ))}
        </ul>
    </div>
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



export default Hashtags;