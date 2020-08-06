import React from 'react';
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import { FaHashtag } from 'react-icons/fa';
import styled from '@emotion/styled';

// Utilities
import kebabCase from "lodash/kebabCase"

const Hashtag = styled.div`

  & ul{
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 0;
  }

  & ul a{
    text-decoration: none;
    border-radius: 20px;
    margin: 5px;
  }

  & ul a li{
    list-style-type: none;
    font-weight: bold;
    font-family: 'Lato';
    color: white;
    top: 5px;
    font-size: 1rem;
    padding: 0 10px;
    position: relative;
  }

  & ul a:nth-child(4n) {
      background-color: #00B2FF;
      color: white;
  }
  & ul a:nth-child(4n+1) {
      background-color:#ebbc00;
      color: white;
  }
  & ul a:nth-child(4n+2) {
      background-color: #7600AD;
      color: white;
  }
  & ul a:nth-child(4n+3) {
      background-color: #7ED957;
      color: white;
  }
  & ul a:hover{
      transform: scale(1.1);
  }

  & ul a:hover:nth-child(4n) {
      background-color: #0096d6;
      color: white;
  }
  & ul a:hover:nth-child(4n+1) {
      background-color:  #ffcc00;
      color: white;
  }
  & ul a:hover:nth-child(4n+2) {
      background-color: #660095;
      color: white;
  }
  & ul a:hover:nth-child(4n+3) {
      background-color: #4ece17;
      color: white;
  }


`


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
        <Hashtag>
          <h3>Elige uno de los siguientes temas que te interese.</h3>
          <h4>Te ayudaremos a encontrar lecturas interesantes sobre ellos.</h4>
          <ul>
              {data.allMarkdownRemark.group.map(tag => (
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}><li><FaHashtag /> {tag.fieldValue}</li></Link>
              ))}
          </ul>
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



export default Hashtags;