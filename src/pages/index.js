import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import Layout from '../components/layout';
import Hashtags from './Hashtags'
import './Index.css';


const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<Helmet title={"Home | The Art of Design"} />
			<Hashtags />
			<div id="posts">
				<h4>También puedes revisar los últimos artículos:</h4>
				{edges.map((edge, index) => {
					const { frontmatter } = edge.node;
					console.log(frontmatter.title)
					console.log(frontmatter.srcPath)
					return (
						<div  key={index}>
						<Link to={frontmatter.path}                 
							className="post-link">
								<div className="post">
												<h5 className="post-date">
													{frontmatter.date}
												</h5>
												<Img className="post-image"
													fluid={frontmatter.srcPath.childImageSharp.fluid}
													alt="A corgi smiling happily"
												/>
												<h5 className="post-title">{frontmatter.title}</h5>
												<p className="post-description">Muse are an English rock band from Teignmouth, Devon, formed in 1994. The band consists of Matt Bellamy (lead vocals, guitar, keyboards), Chris Wolstenholme (bass guitar, backing vocals), and Dominic Howard (drums). </p>                     								
												<div className="post-tag">
													{frontmatter.tags.map((tag) => "#" + tag + " ")}
												</div>
												

								</div>
						</Link>		
						<hr/>				
					</div>
					);
				})}
			</div>
		</Layout>
	);
};



export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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
								fluid {
								  ...GatsbyImageSharpFluid
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