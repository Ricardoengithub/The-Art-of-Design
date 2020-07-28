import React from 'react';
import { graphql, Link } from 'gatsby';
import { FaArrowRight, FaArrowLeft, FaHome, FaTags, FaArrowUp } from 'react-icons/fa';


import './blogPost.css'

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const html = data.markdownRemark.html;
	const { next, prev } = pageContext;

	return (
		<div>
			<div id="nav">
				<Link to="/"><FaHome/> Home</Link>
				<Link to="/tags"><FaTags/> Tags</Link>
			</div>
			<div className="air">
				<h1 id="title">{title}</h1>
				<div>
					<em id="date">{date}</em>
				</div>
				<br />
				<div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
				<div id="navigation">
					<p>
						{prev && (
							<Link to={prev.frontmatter.path}>
								<FaArrowLeft/>
								Previous
							</Link>
						)}
					</p>
					<p>
						{next && (
							<Link to={next.frontmatter.path}>
								Next
								<FaArrowRight/>
							</Link>
						)}
					</p>
				</div>
			</div>
			<Link to="#title"><FaArrowUp id="button-up"/></Link>
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