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
				<div id="posts-row">
				{edges.map((edge, index) => {
					const { frontmatter } = edge.node;
					return (
						<Link to={frontmatter.path}                 
							key={index} className="post-link">
									<Img className="post-image"
										fluid={frontmatter.srcPath.childImageSharp.fluid}
										alt="A corgi smiling happily"
										/>
									<div className="info">
										<h5 className="post-date">
											{frontmatter.date}
										</h5>
										<h5 className="post-title">{frontmatter.title}</h5>
										<div className="post-tag">
											{frontmatter.tags.map((tag) => "#" + tag + " ")}
										</div>
									</div>
						</Link>						
					);
				})}
				</div>
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
								fluid(maxWidth: 1000) {
									base64
									tracedSVG
									aspectRatio
									src
									srcSet
									srcWebp
									srcSetWebp
									sizes
									originalImg
									originalName
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