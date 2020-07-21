import React from 'react';

const Grip = () => {
	return (
		<div id="grip">
			<div className="projects-item">
				<h3 className="projects-header" id="header" style={{'font-weight': 'bold'}}>
					GRIP
				</h3>
				<p id="text">
					Developed full-stack mobile application, GRIP, which helps users to get track
					and motivated on their pullup exercise.
				</p>
				<p id="text" style={{'font-weight': 'bold'}}>Tech stacks used [FRONT]:</p>

				<ul>
					<li id="text" className="list-item">
						React: Javascript Library to create nice user interface. Of course used
						Javascript to create UI interactive.
					</li>
					<li id="text" className="list-item">
						React-Native: General Front-End framework used.
					</li>
					<li id="text" className="list-item">
						Redux: To control various states such as user's login token, user's pull-up
						exercise information, interactive design state, etc
						<ul>
							<li id="text" className="list-item">
								Redux-Saga: Used to control asynchronous states such as RESTful API call to
								recieve data from backend
							</li>
							<li id="text" className="list-item">
								Dev-tools: To monitor many states controlled by redux in Chrome browser
							</li>
						</ul>
					</li>
					<li id="text" className="list-item">
						Lodash: Module to control data input from user's data such as exercise
						summary, private information, etc.
					</li>
					<li id="text" className="list-item">
						Axios: Module to call various backend API endpoint programmed by me.
					</li>
				</ul>

				<p id="text" style={{'font-weight': 'bold'}}>Tech stacks used [BACK]:</p>
				<ul>
					<li id="text" className="list-item">
						Express: Used to build API endpoint to ensure frontend api call succeeds.
						<ul>
							<li id="text" className="list-item">
								API endpoint: created private user authentication endpoints, user's
								pullup-exercise data manipulation based on frontend input.
							</li>
							<li id="text" className="list-item">
								Error handling: made sure it handles whenever api call goes wrong
							</li>
						</ul>
					</li>
					<li id="text" className="list-item">
						For Authentication:
						<ul>
							<li id="text" className="list-item">
								bcryt: used to ensure safe authentication by encrypting user's
								password with hashcode. Only pushed encrypted hashed password into
								database for security.
							</li>
							<li id="text" className="list-item">
								Json-Web-Token: used to create registration and private data system
								for users
							</li>
							<li id="text" className="list-item">
								jwt-express: used as middleware in private api call to ensure that
								posted token from frontend is a valid jwt token, then it sets
								request's user in http with vaild user data such as userId, email,
								etc.
							</li>
							<li id="text" className="list-item">
								Joi: Used in login-system to restric user email and password when
								he/her signup or login.
							</li>
							<li id="text" className="list-item">
								uuid: Used to create unique id for each users to distinguish in
								database.
							</li>
							<li id="text" className="list-item">
								nodemailer: Connected with my google account with nodemailer to send
								vericiation email to users for safe signup. User signup with email,
								password => verification email sent to his/her email => user clicks
								verification button => user data is activated in database => user
								can login.
							</li>
							<li id="text" className="list-item">
								dotenv: to hide crucial variable such as port number, jwt secret
								code.
							</li>
						</ul>
					</li>
					<li id="text" className="list-item">
						Realm-Database: Used Realm database because it is a strong mobile
						application nosql database. I love to modify data structure and schema that
						are document base because of its scalability and easy manipulation.
					</li>
				</ul>
				<p class="card-text" id="text" style={{'font-weight': 'bold'}}>
					In app authentication --- TEST Email: test@gmail.com || TEST password: test1234
				</p>
				<p class="card-text" id="text">
					For IPhone user testflight link{`\n`}(need to download testflight and click link
					through ios device):{' '}
					<a href="https://testflight.apple.com/join/XswI66h5" target="_blank">
						ios testflight link
					</a>
				</p>
				<p class="card-text" id="text">
					Android and Web browser link (will take some time start):{' '}
					<a href="https://expo.io/@chlalstjr7/GRIP" target="_blank">
						Web or Android link
					</a>
				</p>
				<p class="card-text" id="text">
					FrontEnd Github repo:{' '}
					<a href="https://github.com/PhilipChoiFelipe/grip_ReactNative" target="_blank">
						FE Source Code Link
					</a>
				</p>
				<p class="card-text" id="text">
					BackEnd Github repo:{' '}
					<a href="https://github.com/PhilipChoiFelipe/grip_Alpha" target="_blank">
						BE Source Code Link
					</a>
				</p>
			</div>
		</div>
	);
};

export default Grip;