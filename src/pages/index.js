import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet"

import Layout from '../components/layout';
import Hashtags from './Hashtags'
import IndexPosts from './IndexPosts';


const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<Helmet title={"Home | The Art of Design"} />
			<Hashtags />
			<IndexPosts props={edges}/>
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