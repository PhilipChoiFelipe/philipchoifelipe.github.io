import React from 'react';
import './projectCard.scss';
import { Link } from 'react-router-dom';

const ProjectCard = ({ header, title, description, stack, external, link }) => {
	// return(
	// 	<div>
	// 		<h1>
	// 			HELLO
	// 		</h1>
	// 	</div>
	// );
	return (
		<div className="project-card">
			<div class="card border-info mb-5">
				<div class="card-header bg-transparent">
					<h3 id="header">{header}</h3>
				</div>
				<div class="card-body">
					<h4 class="card-title" id="header">
						{title}
					</h4>
					<p class="card-text" id="text">
						{description}
					</p>
				</div>
				<div className="card-footer" class="card-footer bg-transparent" id="text">
					Used Tech Stack: {stack}
					{external ? (
						<a type="button" target="_blank" class="btn btn-dark" href={link}>
							Check Out
						</a>
					) : (
						<a id="link-item" href={link} class="btn btn-dark">
							Check Out
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;