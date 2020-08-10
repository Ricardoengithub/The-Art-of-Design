import styled from "@emotion/styled"

export const Wrapper = styled("div")`
  position: relative;
  height: auto;
  min-height: 100vh;
  color: black;

  & h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: LatoR;
  }
`
export const LPosts = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const PostCard = styled.div`
  position: relative;
  margin: 3px 0 0;
  flex: 0 1 49.9%;
  text-decoration: none;
  background-color: white;

  @media only screen and (max-width: 799px) {
    flex: 0 1 100%;
  }

  .info {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    padding: 20px;
    height: 100px;
  }

  .info h1,
  h5,
  p {
    margin: 0;
    text-align: left;
    vertical-align: middle;
    font-family: LatoR;
  }

  & a:hover {
    & div img {
      transform: scale(1.05);
    }
  }
`

export const SearchBar = styled.div`
  margin: 30vh auto 50vh;
  max-width: 700px;

  & form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto 0;

    input[type="search"] {
      -webkit-appearance: none;
      width: 95%;
      height: 50px;
      position: relative;
      background-color: white;
      border: none;
      border-bottom: solid 3px grey;
      box-sizing: border-box;
      outline: solid white 0;
      transition: all 0s ease-out 0s;
      text-align: center;
      width: 80%;
      &:focus {
        width: 100%;
        z-index: 7;
        text-align: center;
        border: solid 3px #09f;
        outline: solid ${(props) => props.color} 2000px;
        transition: all 0.3s ease-in 0s;
      }
    }
  }

  & ul {
    list-style-type: none;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    z-index: 7;
  }

  & ul a {
    margin: 0;
    color: white;
    font-family: LatoR;
  }
  & ul a:hover {
    color: whitesmoke;
  }
  & ul a li {
    padding: 10px 0;
    margin: 0;
    border-bottom: 1px solid white;
  }
`

export const TagsStyle = styled.div`
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  margin: 0 auto 3rem;
  width: 100%;
  max-width: 45rem;

  & h3 {
    padding: 3rem 0 0;
    font-family: Lato;
  }

  & ul {
    text-align: left;
  }

  & ul li a {
    color: #3498db;
    text-decoration: none;
  }
`
export const Post = styled.div`
  font-family: Helvetica, sans-serif;
  font-weight: 300;
  margin: 0 auto 1rem;
  width: 100%;
  max-width: 65rem;

  & h1 {
    padding: 3rem 0 0;
    font-family: LatoR;
  }
`

export const BlogPost = styled.div`
  width: 90%;
  margin: 0 auto 30px;
  max-width: 55rem;
  font-family: Helvetica;

  & a {
    color: inherit;
  }

  & a:hover {
    color: blue;
  }

  & blockquote {
    margin: 0;
    border-left: 5px solid #7a7a7a;
    font-style: italic;
    padding: 1.33em;
    text-align: left;
  }

  & ul,
  ol,
  li {
    text-align: left;
    color: inherit;
  }

  & p {
    color: inherit;
    font-size: 1rem;
    margin-bottom: 1.2rem;
    text-align: justify;
  }

  & img {
    border-radius: 30px;
    min-width: 275px;
    background-color: white;
  }

  & h2,
  h3,
  h4,
  h5 {
    font-family: Lato;
  }
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  max-width: 50rem;
  margin: 30px auto;
  justify-content: space-evenly;
`
export const ButtonNavigation = styled.div`
  & a {
    border: 2px solid black;
    border-radius: 50px;
    background-color: white;
    color: black;
    text-decoration: none;
    padding: 5px 10px;
    background-color: transparent;
    font-family: LatoR;
  }

  & a:hover {
    background-color: black;
    color: white;
  }
`

export const FeaturedImage = styled.div`
  width: 90%;
  margin: 0 auto 30px;
  max-width: 600px;

  & img {
    border-radius: 30px;
  }
`
export const ShareStyle = styled.div`
  & button {
    margin: -5px 10px;
  }
`

export const FooterStyle = styled.div``
