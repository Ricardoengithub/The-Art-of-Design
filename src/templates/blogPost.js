import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Options from './Options';

import './blogPost.css'

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const html = data.markdownRemark.html;
	const { next, prev } = pageContext;

	return (
		<div>
			<Helmet title={title + " | The Art of Design"} />
			<div className="air">
				<h1 id="title">{title}</h1>
				<div>
					<em id="date">{date}</em>
				</div>
				<br />
				<div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
				<div id="navigation">
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
				</div>
				<Options />
			</div>
		</div>
	);
};


export const postQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				title
				date(formatString: "MMMM, DD, YYYY")
				path
				tags
				excerpt
			}
		}
	}
`;

export default Template;