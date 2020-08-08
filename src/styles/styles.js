import styled from "@emotion/styled"
import myImage from "../images/Pattern-Randomized.svg";

export const Wrapper = styled("div")`
  position: relative;
  height: auto;
  min-height: 100vh;
  color: black;
  // background-color: #ffffff;
  // background-image: url(${myImage});
  // background-size: cover;
  /* background by SVGBackgrounds.com */

  & h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: LatoR;
  }
`

export const Posts = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 20px;

  & h4{
    width: 100%;
    display: block;
  }
`
export const PostCard = styled.div`
  margin: 10px auto 30px;
  width: 250px;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 1px 1px 20px #aaaaaa;
  text-decoration: none;
  background-color: white;

  :hover {
    transform: scale(1.03);
  }

  & a {
    text-decoration: none;
    color: black;
    font-family: "Lato";
  }

  & img {
    width: 100%;
    margin: 0 auto;
    background-color: transparent;
    border-radius: 50px 50px 0 0;
    height: 200px;
  }

  & h3 {
    margin: 0 0 5px 0;
    font-family: Lato;
  }

  & h4 {
    font-family: Lato;
    margin: 0 0;
  }
`

export const Hashtag = styled.div`
  margin: 6rem auto;
  padding: 10vh;
  width: 100%;

  & ul {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px 0;
  }

  & ul a {
    text-decoration: none;
    border-radius: 20px;
    margin: 5px;
  }

  & ul a li {
    list-style-type: none;
    font-weight: bold;
    font-family: "Lato";
    color: white;
    top: 5px;
    font-size: 1rem;
    padding: 0 10px;
    position: relative;
  }

  & ul a:nth-child(4n) {
    background-color: #00b2ff;
    color: white;
  }
  & ul a:nth-child(4n + 1) {
    background-color: #ebbc00;
    color: white;
  }
  & ul a:nth-child(4n + 2) {
    background-color: #7600ad;
    color: white;
  }
  & ul a:nth-child(4n + 3) {
    background-color: #7ed957;
    color: white;
  }

  & ul a:hover {
    transform: scale(1.1);
  }

  & ul a:hover:nth-child(4n) {
    background-color: #0096d6;
    color: white;
  }
  & ul a:hover:nth-child(4n + 1) {
    background-color: #ffcc00;
    color: white;
  }
  & ul a:hover:nth-child(4n + 2) {
    background-color: #660095;
    color: white;
  }
  & ul a:hover:nth-child(4n + 3) {
    background-color: #4ece17;
    color: white;
  }
`

export const SearchBar = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
  padding: 30vh 0;

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
        transition: all 1s ease-in 0s;
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
    color: blue;
    font-family: LatoB;
  }
  & ul a:hover {
    color: lightblue;
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
  max-width: 50rem;

  & h3 {
    padding: 3rem 0 0;
    font-family: Lato;
  }

  & ul {
    text-align: left;
  }

  & ul li a {
    color: #3498db;
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
  width: 80%;
  margin: 0 10%;
  justify-content: space-between;
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
    font-family: LatoB;
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
