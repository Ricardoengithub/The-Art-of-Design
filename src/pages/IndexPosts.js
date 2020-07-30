import React from 'react';
import { Link } from 'gatsby';
import './IndexPosts.css';

// const Posts = (edges) => {
// 	edges.map(edge => {
// 		const { frontmatter } = edge.node;
// 		console.log(edge)
// 		return (
// 			<div key={frontmatter.path}>
// 				<Link to={frontmatter.path}>{frontmatter.title}</Link>
// 				&nbsp;
// 				<small>
// 					{' '}
// 					<em>published on</em> {frontmatter.date}
// 				</small>
// 				<p>{frontmatter.excerpt}</p>
// 				<br />
// 			</div>
// 		);
// 	})
// }



const ListPosts = (props) => {
	let colors = ["#E0B0FF", "#E6E6FA", "#F7D6D0"]
	const listPosts = props.props.props.map((node, index) =>	
    <div>

        <Link to={node.node.frontmatter.path}                 
            className="post-link">
                <div className="post">
                        <div key={node.node.id}>

                                <h3 className="post-title">{node.node.frontmatter.title}</h3>
                                <em className="post-date">{node.node.frontmatter.date}</em>                            
                                <br/>
                                <div className="post-tag">
                                    {node.node.frontmatter.tags.map((tag) => "#" + tag + " ")}
                                </div>
                                
                        </div>
                </div>
        </Link>
        <hr/>
    </div>
	)
	console.log(props.props.props)
	return(
		<div id="posts">
            <h4>También puedes revisar los últimos artículos:</h4>
			{listPosts}
		</div>
	)
}


const IndexPosts = (props) => {    

    return (
            <ListPosts props={props}/>
    );

}

export default IndexPosts