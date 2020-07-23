import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
	'/images/gripImages/pullup_api_v1-API flowchart.jpg',
	'/images/gripImages/pullup_api_v1-Auth flowchart.jpg',
	'/images/gripImages/pullup_api_v1-Database_ User.jpg',
	'/images/gripImages/pullup_api_v1-Nav Stack.jpg',
];

const Flowchart = () => {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [open, setOpen] = useState(false);

	return (
		<div>
			<p class="card-text" id="text">
				Building fullstack mobile application required a lot of planning. Therefore I used
				diverse flow charts to plan out different functions for app.
			</p>
			<ul>
				<li id="text">[1] General flow of app</li>
				<li id="text">[2] Authentication flow of app</li>
				<li id="text">[3] User database schema chart</li>
				<li id="text">
					[4] Redux charts to plan asynchronous RESTful API system between front and
					backend
				</li>
			</ul>
			<div id="button">
				<p
					className="btn btn-dark"
					id="text"
					style={{ color: 'white', alignSelf: 'center'}}
					onClick={() => setOpen(true)}
				>
					Open Flowchart
				</p>
			</div>
			{open && (
				<Lightbox
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => setOpen(false)}
					onMovePrevRequest={() =>
						setPhotoIndex((photoIndex + images.length - 1) % images.length)
					}
					onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
				/>
			)}
		</div>
	);
};

export default Flowchart;