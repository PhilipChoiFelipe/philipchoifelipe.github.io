import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
	process.env.PUBLIC_URL + '/images/gundownImages/gundownDemo1.png',
	process.env.PUBLIC_URL + '/images/gundownImages/gundownDemo2.png',
	process.env.PUBLIC_URL + '/images/gundownImages/gundownDemo3.png',
	process.env.PUBLIC_URL + '/images/gundownImages/gunDownDemo4.png',
	process.env.PUBLIC_URL + '/images/gundownImages/gundownDemo5.png'
];

const Drawings = () => {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div style={{'margin-top': '16px', 'margin-left': '10px'}}>
				<p
					class="btn btn-dark"
					id="text"
					style={{ color: 'white', alignSelf: 'center'}}
					onClick={() => setOpen(true)}
				>
					View Drawings
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

export default Drawings;