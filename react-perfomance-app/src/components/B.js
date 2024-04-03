import React from 'react'

// 컴포넌트 안에서 쪼개어 처리
// React.memo 사용하여 불필요한 렌더링 제외

const Message = React.memo(({message}) => {
	return <p>{message}</p>
})

const ListItem = React.memo(({post}) => {
	return (
		<li key={post.id}>
			<p>{post.title}</p>
		</li>
	)
})

const List = React.memo(({posts}) => {
	return (
		<ul>
			{posts.map(post => (
				<ListItem key={post.id} post={post} />
			))}
		</ul>
	)
})

const B = ({ message, posts }) => {
	return (
		<div>
			<h1>B components</h1>
			<Message message={message} />
			<List posts={posts} />
		</div>
	)
}

export default B