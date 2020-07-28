import React, {useState} from 'react';

//Components
import Grip from './grip/grip';
import GunDown from './gunDown/gunDown';
import Drawings from './gunDown/gunImages'
import ProjectCard from './projectCard';
import Milimili from './milimili/milimili';
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
						<p id="korean-text" style={{lineHeight: '10px'}}>[풀스택 모바일 앱 개발]</p>
					</div>
					<div class="card-body">
						<Grip/>
						
					</div>
					<div className="card-footer" class="card-footer bg-transparent" id="text">
						Used Tech Stacks (사용기술): ReactJS - React-Native - ExpressJS - Realm DB
						<a id="link-item" href="https://expo.io/@chlalstjr7/GRIP" class="btn btn-dark" target="_blank"  rel="noopener noreferrer">
							Check Out
						</a>
					</div>
				</div>
			</div>
			<div className="project-card">
				<div class="card border-info mb-5">
					<div class="card-header bg-transparent">
						<h3 id="header">Java Programmed Game Development</h3>
						<p id="korean-text" style={{lineHeight: '10px'}}>[자바 프로그래밍 게임 개발]</p>
					</div>
					<GunDown/>
					<div className="card-footer" class="card-footer bg-transparent" id="text">
						Used Tech Stacks (사용기술): Java
						<div className="two-buttons">
							<a style={{color: 'white'}} id="text" href="https://github.com/PhilipChoiFelipe/GunDown" class="btn btn-dark" target="_blank"  rel="noopener noreferrer">
								Check Out
							</a>
							<Drawings />
						</div>
					</div>
				</div>
			</div>
			<div className="project-card">
				<div class="card border-info mb-5">
					<div class="card-header bg-transparent">
						<h3 id="header">Full-Stack Web Development</h3>
						<p id="korean-text" style={{lineHeight: '10px'}}>[풀스택 웹 애플리케이션 개발]</p>
					</div>
					<Milimili/>
					<div className="card-footer" class="card-footer bg-transparent" id="text">
						Used Tech Stacks (사용기술): ReactJS - Firebase
						<a
							id="link-item"
							target="_blank"
							href="https://philipchoifelipe.github.io/milimili/?#/others"
							class="btn btn-dark"
							rel="noopener noreferrer"
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