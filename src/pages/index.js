import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from '../components/layout';
import SEO from "../components/seo"
import Hashtags from './Hashtags'

const PostCard = styled.div`
	margin: 30px auto;
	width: 250px;
	text-decoration: none;
	border-radius: 50px;
	box-shadow: 1px 1px 20px #aaaaaa;
	text-decoration: none;
	
	:hover{
		transform: scale(1.05)
	}
	
	& a {
		text-decoration: none;
		color: black;
		font-family: 'Lato';
	}
	& img{
		width: 100%;
		margin: 0 auto;
		background-color: transparent;
		border-radius: 50px 50px 0 0;
		height: 200px;
	}
	& h3{
		margin: 0 0 5px 0;
	}
	& h4{
		margin: 0 0;
	}
`

const Posts = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<SEO title="The Art of design" description="A design articles site."/>
			<Helmet title={"Home"} />
			<Hashtags />
			<h4>También puedes revisar los últimos artículos:</h4><br/>
			<Posts>
				{edges.map((edge, index) => {
					const { frontmatter } = edge.node;
					return (
						<PostCard>
							<Link to={frontmatter.path + "#topp"}                 
								key={index}>
											<Img
												fixed={frontmatter.srcPath.childImageSharp.fixed}
												alt="A corgi smiling happily"
												/>
											<h3>{frontmatter.title}</h3>
											<h4>
												<small>
													<em>{frontmatter.date}</em>
												</small>
											</h4>
											<p>
												{frontmatter.tags.map((tag) => "#" + tag + " ")}
											</p>
										
							</Link>
						</PostCard>				
					);
				})}
			</Posts>
		</Layout>
	);
};


export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date } limit: 4) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						excerpt
						srcPath{
							childImageSharp {
								fixed(width: 250, height: 200){
									...GatsbyImageSharpFixed
								}
							}
						}
					}
				}
			}
		}
	}
`;


export default IndexPage;