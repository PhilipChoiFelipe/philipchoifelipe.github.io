import React from 'react';

const Milimili = () => {
	return(
		<div class="card-body">
						<h3 className="projects-header" id="header" style={{ 'font-weight': 'bold' }}>
							MiliMili
						</h3>
						<p class="card-text" id="text">
							Created Shareable diary platform for soldiers to share their tough days.
							People can post their story and others can comment. Users can get
							notification whenever other comments! 
						</p>
						<p id="korean-text">
							군인들의 힘든 고충을 언제든지 기록하고 다른 사용자들과 익명으로 공유할 수 있는 플랫폼을 개발하였습니다. 게시물 삭제와 공유할 수 있는 기능이 있으며, 게시물을 공유한다면 다른 사용자들이 해당 게시물을 읽고 댓글을 달수 있습니다. 댓글에는 현재 복무 상태만 표시되며, 자신의 게시물에 댓글이 달리거나 자신의 댓글에 댓글이 달리면 알림이 뜨는 기능이 있습니다.
						</p>
						<hr/>
						<p class="card-text" id="text">
							(테스트 계정)
							|| TEST Email: test@gmail.com ||
							TEST password: 123456
						</p>
						
					</div>
	);
}

export default Milimili;