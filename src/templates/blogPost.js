import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styled from '@emotion/styled';
import SEO from "../components/seo";
import Layout from '../components/layout';


const Post = styled.div`
	font-family: Helvetica, sans-serif;
	font-weight: 300;
	margin: 2rem auto 1rem;
	width: 100%;
	max-width: 65rem;
`

const BlogPost = styled.div`
	width: 90%;
	margin: 0 auto 30px;
	font-family: Helvetica;


	& a{
		color: #3498db;
	}
	  
	& a:hover{
		color: #2980b9;
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
		color: black;
	}
	  
	& p {
		color: black;
		font-size: 1rem;
		margin-bottom: 1.2rem;
		text-align: justify;
	}
	& img{
		border-radius: 30px;
		min-width: 275px;
		background-color: white;
	  }
`

const Navigation = styled.div`
	display: flex;
	flex-direction: row;
	width: 80%;
	margin: 0 10%;
	justify-content: space-between;
`

const FeaturedImage = styled.div`
	  width: 70%;
	  margin: 0 auto 30px;
	  max-width: 700px;

	  & img{
		border-radius: 30px;
		min-width: 275px;
	  }
`

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const html = data.markdownRemark.html;
	const { next, prev } = pageContext;

	return (
		<Layout>
			<SEO
				title={title}
				description={data.markdownRemark.frontmatter.excerpt}
				image={data.markdownRemark.frontmatter.srcPath.childImageSharp.fluid}
				pathname={data.site.siteUrl + data.markdownRemark.frontmatter.path}
			/>
			<Post>
				<h1 >{title}</h1>
				<small><em>{date}</em></small>
				<FeaturedImage>
					<Img
						fluid={data.markdownRemark.frontmatter.srcPath.childImageSharp.fluid}
						alt="A corgi smiling happily"
						className="fimage"
					/>
				</FeaturedImage>
				<BlogPost>
					<div dangerouslySetInnerHTML={{ __html: html }} />
				</BlogPost>
				<Navigation>
						{prev && (
							<Link to={prev.frontmatter.path}>
								<FaArrowLeft/>
								Previous
							</Link>
						)}

						{next && (
							<Link to={next.frontmatter.path}>
								Next
								<FaArrowRight/>
							</Link>
						)}
				</Navigation>
			</Post>
		</Layout>
	);
};


export const postQuery = graphql`
	query($pathSlug: String!) {
		site {
			siteMetadata {
			  title
			  description
			  author
			  siteUrl
			}
		}
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
				srcPath{
					childImageSharp {
						fluid {
						  ...GatsbyImageSharpFluid
						}
					  }
				}
			}
		}
	}
`;

export default Template;