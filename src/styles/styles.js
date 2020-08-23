import styled from "@emotion/styled"

export const Wrapper = styled.div`
  position: relative;
  height: auto;
  min-height: 100vh;
  color: black;
  background-color: white;

  & h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: Helvetica;
    font-weight: 100;
  }
`

export const HomePageStyle = styled.div`
  display: flex;
  flex-flow: row wrap; 
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  margin-top: 5vh;

`
export const LPosts = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;

  & a {
    text-decoration: none;
  }
`
export const PostCard = styled.div`
  flex: 0 1 30%;
  margin: 30px auto;
  min-width: 300px;
  :hover{
    animation: shake 1s;
  }
  
  & a {
    color: black;
  }

  .imagen{
    flex: 100%;
    max-width: 350px;
    margin: 0 auto;
    border-radius: 20px;
  }


  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
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
    font-family: Helvetica;
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
  width: 90%;
  max-width: 45rem;

  & h3 {
    padding: 3rem 0 0;
    font-family: Helvetica;
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
    font-family: Helvetica;
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
    font-family: Helvetica;
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
