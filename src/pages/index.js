import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Img from "gatsby-image"

import Layout from '../components/layout';
import SEO from "../components/seo"
import Hashtags from './Hashtags'

import { Posts, PostCard} from "../styles/styles"

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<SEO title="The Art of design" description="A design articles site."/>
			<Helmet title={"Home"} />
			<Hashtags />
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