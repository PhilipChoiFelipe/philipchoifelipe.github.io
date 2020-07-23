import React, {useState} from 'react';

//Components
import Grip from './grip/grip';
import ProjectCard from './projectCard';
//util
import { Route } from 'react-router-dom';
//design
import './projects.scss';

const Projects = () => {
	return (
		<div className="projects-container">
			<div className="project-card">
				<div class="card border-info mb-5">
					<div class="card-header bg-transparent">
						<h3 id="header">Full-Stack mobile app development</h3>
					</div>
					<div class="card-body">
						<Grip/>
						
					</div>
					<div className="card-footer" class="card-footer bg-transparent" id="text">
						Used Tech Stacks: ReactJS - React-Native - ExpressJS - Realm DB
						<a id="link-item" href="https://expo.io/@chlalstjr7/GRIP" class="btn btn-dark" target="_blank">
							Check Out
						</a>
					</div>
				</div>
			</div>
			<div className="project-card">
				<div class="card border-info mb-5">
					<div class="card-header bg-transparent">
						<h3 id="header">Java Programmed Game Development</h3>
					</div>
					<div class="card-body">
						<h4 class="card-title" id="header">
							guNdoWn
						</h4>
						<p class="card-text" id="text">
							Created game with pure Java language without any external modules. Hand
							drawn pictures, data structure and algorithms to create maps, objects,
							and actions
						</p>
					</div>
					<div className="card-footer" class="card-footer bg-transparent" id="text">
						Used Tech Stacks: Java
						<a id="link-item" href="#grip" class="btn btn-dark">
							Check Out
						</a>
					</div>
				</div>
			</div>
			<div className="project-card">
				<div class="card border-info mb-5">
					<div class="card-header bg-transparent">
						<h3 id="header">Full-Stack Web Development</h3>
					</div>
					<div class="card-body">
						<h4 class="card-title" id="header">
							MiliMili
						</h4>
						<p class="card-text" id="text">
							Created Shareable diary platform for soldiers to share their tough days.
							People can post their story and others can comment. Users can get
							notification whenever other comments! || TEST Email: test@gmail.com ||
							TEST password: 123456
						</p>
					</div>
					<div className="card-footer" class="card-footer bg-transparent" id="text">
						Used Tech Stacks: ReactJS - Firebase
						<a
							id="link-item"
							target="_blank"
							href="https://philipchoifelipe.github.io/milimili/?#/others"
							class="btn btn-dark"
						>
							Check Out
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
// <ProjectCard
// 				header="Full-Stack mobile app development"
// 				title="Grip"
// 				description="Developed full-stack mobile application, GRIP, which helps users to get track and motivated on their pullup exercise."
// 				stack={'ReactJS - React-Native - ExpressJS - Realm DB'}
// 				external={false}
// 				link={'#grip'}
// 			/>
// 			<ProjectCard
// 				header="Java Programmed Game Development"
// 				title="guNdoWn"
// 				description="Created game with pure Java language without any external modules. Hand drawn pictures, data structure and algorithms to create maps, objects, and actions"
// 				stack={'Java'}
// 			/>
// 			<ProjectCard
// 				header="Full-Stack Web Development"
// 				title="MiliMili"
// 				description="Created Shareable diary platform for soldiers to share their tough days. People can post their story and others can comment. Users can get notification whenever other comments! || TEST Email: test@gmail.com || TEST password: 123456"
// 				stack={'ReactJS - Firebase'}
// 				external={true}
// 				link={'https://philipchoifelipe.github.io/milimili/?#/others'}
// 			/>
//<Route path = "projects/grip" component={Grip}/>