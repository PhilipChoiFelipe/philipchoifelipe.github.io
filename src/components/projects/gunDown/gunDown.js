import React from 'react';

const GunDown = () => {
	return (
		<div>
			<div class="card-body">
				<h3 className="projects-header" id="header" style={{ 'font-weight': 'bold' }}>
					GunDown
				</h3>
				<p class="card-text" id="text">
					Created game with pure Java language without any external modules. Hand drawn
					pictures, data structure and algorithms to create maps, objects, and actions
				</p>
				<p id="korean-text">
					자바의 JPanel을 이용한 그림판과 다양한 클래스 구조와 자료 구조의 응용, 그리고 오브젝트와 맵의 효율적인 구동을 위한 알고리즘을 통해 만든 2D 슈팅게임입니다. 
					윈도우의 있는 그림판을 통해 직접 캐릭터, 사물, 맵을 그렸고 외부 프로그램을 사용하지 않은 저의 자바 프로그램입니다. 개발은 현재 진행중입니다.
				</p>
				<hr/>
				<p class="card-text" id="text">
					Github repo:{' '}
					<a href="https://github.com/PhilipChoiFelipe/GunDown" target="_blank"  rel="noopener noreferrer">
						Source Code Link
					</a>
				</p>
			</div>
		</div>
	);
};

export default GunDown;