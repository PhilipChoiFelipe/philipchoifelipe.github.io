import React from 'react';

//components 
import Background from './components/background';
import Projects from './components/projects/projects';
import ProgramLang from './components/programLang/programLang';
//util 
import { Route, Link, Switch } from 'react-router-dom';

//design
import './App.scss';

const App = () => {
	return (
		<div className="container" class="container">
			<div className="banner">
				<h1 className="name" id="header">
					Developer Minseok Choi
				</h1>
			</div>
			<div className="information">
				<Background />
				<hr />
				<ul className="link-list">
					<li id="link-item1">
						<Link to ="/projects" style={{ textDecoration: 'none' }}><h2 className="projects" id="header">Projects</h2></Link>
					</li>
					<li id="link-item2">
						<Link id="link-item" to ="/programLang" style={{ textDecoration: 'none' }}><h2 className="projects" id="header">Program Languages</h2></Link>
					</li>
					<li id="link-item3">
						<Link id="link-item" to ="/contact" style={{ textDecoration: 'none' }}><h2 className="projects" id="header">Contact</h2></Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route exact path="/projects" component={Projects}/>
				<Route path="/programLang" component={ProgramLang}/>
				<Route path="/contact" component={ProgramLang}/>
			</Switch>
		</div>
	);
};

export default App;