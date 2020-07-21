import React from 'react';
import '../App.scss';
const Background = () => {
	return (
		<div className="background-container">
			<div className="background-content">
				<img className="profile-image" src="/images/profile" alt="Profile" />
				<ul>
					<li id="text" className="list-item">
						HighSchool: Korea International School
					</li>
					<li id="text" className="list-item">
						University: University of Washington, Seattle
					</li>
					<li id="text" className="list-item">
						Major: Informatics
					</li>
					<li id="text" className="list-item">
						Position: FullStack Developer
					</li>
					<li id="text" className="list-item">
						Fluent in both Korean and English
					</li>
					<li id="text" className="list-item">
						Loves music, knows how to compose with logic, and play guitar
					</li>
					<li id="text" className="list-item">
						Enjoys weight training and swimming
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Background;

			// <h2 className="background" id="header">
			// 	Background
			// </h2>