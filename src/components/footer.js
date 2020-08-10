import React from "react"
import { FooterStyle} from "../styles/styles"


const Footer = () => {
    return(
        <FooterStyle>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
    </FooterStyle>
    )
}

export default Footer