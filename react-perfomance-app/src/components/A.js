import React from 'react'

// 컴포넌트 안에 통째로 넣는 방식
const A = ({ message, posts }) => {
	return (
		<div>
			<h1>A components</h1>
			<p>{message}</p>
			<ul>
				{posts.map((post)=>{
					return (
						<li key={post.id}>
							<p>{post.title}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default A