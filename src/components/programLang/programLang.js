import React from 'react';
import './programLang.scss';

const ProgramLang = () => {
	return (
		<div className="container">
			<h1 id="header">Experienced In..</h1>
			<div className="icons">

				<div className="icon-sector">
					<i class="devicon-html5-plain colored" id="icon"></i>
					<p id="text" className="icon-text">Html</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-css3-plain colored" id="icon"></i>
					<p id="text">Css</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-bootstrap-plain" id="icon"></i>
					<p id="text">BootStrap</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-javascript-plain colored" id="icon"></i>
					<p id="text">Javascript</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-react-original colored" id="icon"></i>
					<p id="text">React/React-native</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-android-plain" id="icon"></i>
					<p id="text">Kotlin</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-express-original" id="icon"></i>

					<p id="text">Express/Koa</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-java-plain" id="icon"></i>
					<p id="text">Java</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-go-plain colored" id="icon"></i>
					<p id="text">GoLang</p>
				</div>

				<div className="icon-sector">
					<i class="devicon-mongodb-plain-wordmark colored" id="icon"></i>
					<p id="text">MongoDB / RealmDB</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-mysql-plain colored" id="icon"></i>
					<p id="text">MySql</p>
				</div>
				<div className="icon-sector">
					<i class="devicon-git-plain" id="icon"></i>
					<p id="text">Git</p>
				</div>
				

			</div>
		</div>
	);
};

export default ProgramLang;