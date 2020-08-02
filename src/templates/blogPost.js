import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Options from './Options';
import Header from '../components/header';
import SEO from "../components/seo"

import './blogPost.css'

const Template = ({ data, pageContext }) => {
	const title = data.markdownRemark.frontmatter.title;
	const date = data.markdownRemark.frontmatter.date;
	const html = data.markdownRemark.html;
	const { next, prev } = pageContext;

	return (
		<div>
			<SEO
				title={title}
				description={data.site.description || data.markdownRemark.frontmatter.excerpt}
				image={data.markdownRemark.frontmatter.srcPath.childImageSharp.fluid}
				pathname={data.site.siteUrl + data.markdownRemark.frontmatter.path}
			/>
			<Helmet title={title + " | The Art of Design"} />
			<Header />
			<div id="topp"/>
			<div className="air">
				<h2 id="title">{title}</h2>
				<div>
					<em id="date">{date}</em>
				<Img
					fluid={data.markdownRemark.frontmatter.srcPath.childImageSharp.fluid}
					alt="A corgi smiling happily"
					className="fimage"
				/>
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