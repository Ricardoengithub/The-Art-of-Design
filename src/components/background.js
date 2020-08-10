import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className, image, url, title }) => (
  <StaticQuery
    query={graphql`
      query {
        b1: file(relativePath: { eq: "b1.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        b2: file(relativePath: { eq: "b2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        b3: file(relativePath: { eq: "b3.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const images = [
        data.b1.childImageSharp.fluid,
        data.b2.childImageSharp.fluid,
        data.b3.childImageSharp.fluid,
      ]
      const imageData = images[image]

      return (
        <Link to={url}>
          <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`black`}
          >
            <div className="description">
              <h1>{title}</h1>
            </div>
          </BackgroundImage>
        </Link>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  position: relative;
  height: 47vh;
  width: 100%;
  background-position: center center;
  background-size: cover;
  margin: 0 0 10px;
  
  @media (pointer:coarse) {
    /* Primary Input is a coarse pointer device such as touchscreen or XBox Kinect etc */
    .description {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      opacity: 1;
      padding-top: 20px;
      height: 45vh;
      
      /* transition effect. not necessary */
      transition: all .3s linear 0s;
    }
    .description h1 {
      text-align: center;
      position: absolute;
      height: 45vh;
      left: 50%;
      top: 50%;
      transform: translate(-50px, -50px);
      vertical-align: middle;
    }
  
    :hover .description {
      background: rgba(0, 0, 0, 0.32);
      animation: slidein 1.5s;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }
  }

  @media (pointer:fine) {
    .description {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      opacity: 1;
      padding-top: 20px;
      height: 45vh;
      opacity: 0;
      visibility: hidden;
      
      /* transition effect. not necessary */
      transition: all .3s linear 0s;
    }
    .description h1 {
      text-align: center;
      position: absolute;
      height: 45vh;
      left: 50%;
      top: 50%;
      transform: translate(-50px, -50px);
      vertical-align: middle;
    }
  
    :hover .description {
      opacity: 1;
      visibility: visible;
      background: rgba(0, 0, 0, 0.32);
      animation: slidein 1.5s;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }

  }



  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%; 
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`

export default StyledBackgroundSection
