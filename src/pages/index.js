import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import Layout from '../components/layout';
import SEO from "../components/seo"
import Hashtags from './Hashtags'
import './Index.css';

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<SEO title="The Art of design" description="A design articles site."/>
			<Helmet title={"Home | The Art of Design"} />
			<Hashtags />
			<div id="posts">
				<h4>También puedes revisar los últimos artículos:</h4>
				<div id="posts-row">
				{edges.map((edge, index) => {
					const { frontmatter } = edge.node;
					return (
						<Link to={frontmatter.path + "#topp"}                 
							key={index} className="post-link">
									<Img className="post-image"
										fluid={frontmatter.srcPath.childImageSharp.fluid}
										alt="A corgi smiling happily"
										/>
									<div className="info">
										<h4 className="post-date">
											<small>
												<em>{frontmatter.date}</em>
											</small>
										</h4>
										<h3 className="post-title">{frontmatter.title}</h3>
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