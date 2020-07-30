import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"

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
					return (
						<div  key={index}>
						<Link to={frontmatter.path}                 
							className="post-link">
								<div className="post">

			
												<h5 className="post-title">{frontmatter.title}</h5>
												<em className="post-date">{frontmatter.date}</em>                            
												<br/>
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
					}
				}
			}
		}
	}
`;

export default IndexPage;