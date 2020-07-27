import React, { useState } from 'react';

import Flowchart from './gripFlowcharts';

import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import './grip.scss';

const Grip = () => {
	const [front, setFront] = useState(false);
	const [back, setBack] = useState(false);
	const [flow, setFlow] = useState(false);
	const [auth, setAuth] = useState(false);

	return (
		<div id="grip">
			<div className="projects-item">
				<h3 className="projects-header" id="header" style={{ 'font-weight': 'bold' }}>
					GRIP
				</h3>
				<p id="text">
					Developed full-stack mobile application, GRIP, which helps users to get track
					and motivated on their pullup exercise.
				</p>
				<p id="korean-text">
					사용자의 턱걸이 운동을 기록하고 분석해 주는 모바일 어플 'GRIP'을 개발했습니다.
					운동 기록들은 개인 유저의 캘린더로 저장되어서 편하게 확인 가능하고, 기록의
					평균치를 계산해 사용자에게 알맞은 턱걸이 세트를 추천해 줍니다. 또한 운동을 할
					때 현재 세트의 개수와 타이머를 통한 휴식시간 조정을 통해 나만의 개인 트레이너의
					이미지를 심어서 유저의 앱 필요성을 높였습니다.
				</p>
				<hr/>
				<div className="video">
					<p id="text">Demo Video</p>
					<video
						src={process.env.PUBLIC_URL + '/images/gripImages/demoVideo.MP4'}
						width="250"
						height="440"
						controls
					/>
				</div>
				<hr/>
				<div className="text-sector">
					<p id="text" style={{ 'font-weight': 'bold' }}>
						Tech stacks used [FRONT]:
					</p>

					{front ? (
						<MdExpandLess
							onClick={() => {
								setFront(!front);
							}}
							color={'#333333'}
							size={30}
						/>
					) : (
						<MdExpandMore
							onClick={() => {
								setFront(!front);
							}}
							color={'#333333'}
							size={30}
						/>
					)}
				</div>
				{front ? (
					<ul>
						<li id="text" className="list-item">
							React: Javascript Library to create nice user interface. Of course used
							Javascript to create UI interactive.
						</li>
						<li id="text" className="list-item">
							React-Native: General Front-End framework used.
						</li>
						<li id="text" className="list-item">
							Redux: To control various states such as user's login token, user's
							pull-up exercise information, interactive design state, etc
							<ul>
								<li id="text" className="list-item">
									Redux-Saga: Used to control asynchronous states such as RESTful
									API call to recieve data from backend
								</li>
								<li id="text" className="list-item">
									Dev-tools: To monitor many states controlled by redux in Chrome
									browser
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
				) : null}
				<div className="text-sector">
					<p id="text" style={{ 'font-weight': 'bold' }}>
						Tech stacks used [BACK]:
					</p>
					{back ? (
						<MdExpandLess
							onClick={() => {
								setBack(!back);
							}}
							color={'#333333'}
							size={30}
						/>
					) : (
						<MdExpandMore
							onClick={() => {
								setBack(!back);
							}}
							color={'#333333'}
							size={30}
						/>
					)}
				</div>
				{back ? (
					<ul>
						<li id="text" className="list-item">
							Express: Used to build API endpoint to ensure frontend api call
							succeeds.
							<ul>
								<li id="text" className="list-item">
									API endpoint: created private user authentication endpoints,
									user's pullup-exercise data manipulation based on frontend
									input.
								</li>
								<li id="text" className="list-item">
									Error handling: made sure it handles whenever api call goes
									wrong
								</li>
							</ul>
						</li>
						<li id="text" className="list-item">
							For Authentication:
							<ul>
								<li id="text" className="list-item">
									bcryt: used to ensure safe authentication by encrypting user's
									password with hashcode. Only pushed encrypted hashed password
									into database for security.
								</li>
								<li id="text" className="list-item">
									Json-Web-Token: used to create registration and private data
									system for users
								</li>
								<li id="text" className="list-item">
									jwt-express: used as middleware in private api call to ensure
									that posted token from frontend is a valid jwt token, then it
									sets request's user in http with vaild user data such as userId,
									email, etc.
								</li>
								<li id="text" className="list-item">
									Joi: Used in login-system to restric user email and password
									when he/her signup or login.
								</li>
								<li id="text" className="list-item">
									uuid: Used to create unique id for each users to distinguish in
									database.
								</li>
								<li id="text" className="list-item">
									nodemailer: Connected with my google account with nodemailer to
									send vericiation email to users for safe signup. User signup
									with email, password => verification email sent to his/her email
									=> user clicks verification button => user data is activated in
									database => user can login.
								</li>
								<li id="text" className="list-item">
									dotenv: to hide crucial variable such as port number, jwt secret
									code.
								</li>
							</ul>
						</li>
						<li id="text" className="list-item">
							Realm-Database: Used Realm database because it is a strong mobile
							application nosql database. I love to modify data structure and schema
							that are document base because of its scalability and easy manipulation.
						</li>
					</ul>
				) : null}
				<div className="text-sector">
					<p id="text" style={{ 'font-weight': 'bold' }}>
						Flowcharts:
					</p>
					{flow ? (
						<MdExpandLess
							onClick={() => {
								setFlow(!flow);
							}}
							color={'#333333'}
							size={30}
						/>
					) : (
						<MdExpandMore
							onClick={() => {
								setFlow(!flow);
							}}
							color={'#333333'}
							size={30}
						/>
					)}
				</div>
				{flow ? <Flowchart /> : null}

				<div className="text-sector">
					<p id="text" style={{ 'font-weight': 'bold' }}>
						Try in real life [beta version]:
					</p>
					{auth ? (
						<MdExpandLess
							onClick={() => {
								setAuth(!auth);
							}}
							color={'#333333'}
							size={30}
						/>
					) : (
						<MdExpandMore
							onClick={() => {
								setAuth(!auth);
							}}
							color={'#333333'}
							size={30}
						/>
					)}
				</div>
				{auth ? (
					<div>
						<p class="card-text" id="text" style={{ 'font-weight': 'bold' }}>
							In app authentication --- TEST Email: test@gmail.com || TEST password:
							test1234
						</p>
						<p class="card-text" id="text">
							For IPhone user testflight link{`\n`}(need to download testflight and
							click link through ios device):{' '}
							<a href="https://testflight.apple.com/join/XswI66h5" target="_blank"  rel="noopener noreferrer">
								ios testflight link
							</a>
						</p>
						<p class="card-text" id="text">
							Android and Web browser link (will take some time start):{' '}
							<a href="https://expo.io/@chlalstjr7/GRIP" target="_blank"  rel="noopener noreferrer">
								Web or Android link
							</a>
						</p>
					</div>
				) : null}
				<p class="card-text" id="text">
					FrontEnd Github repo:{' '}
					<a href="https://github.com/PhilipChoiFelipe/grip_ReactNative" target="_blank"  rel="noopener noreferrer">
						FE Source Code Link
					</a>
				</p>
				<p class="card-text" id="text">
					BackEnd Github repo:{' '}
					<a href="https://github.com/PhilipChoiFelipe/grip_Alpha" target="_blank"  rel="noopener noreferrer">
						BE Source Code Link
					</a>
				</p>
			</div>
		</div>
	);
};

export default Grip;