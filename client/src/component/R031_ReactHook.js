import React, { useState, useEffect } from 'react'; 

/**
 * hook 사용하기
 * 함수형 컴포넌트에서 클래스형 컴포넌트와 같이 state와 생명주기 함수와 같은 기능을 사용하기 위해 hook 사용
 * 
 * 1. 리액트에서 기본으로 제공해주는 useState()와 useEffect() 함수를 위해 import 
 */
function R031_ReactHook(props) {
	// useState() 함수로 state 변수값을 선언 및 할당
	// contents : state 변수명
	// setContents : state 변수값 변경 함수
	const [contents, setContents] = useState('THIS IS REACT');

	// useEffect() 함수는 생명주기 함수 componentDidMount()와 같이 return 되는 html 코드들이 화면에 그려진 이후에 
 	// 실행된다. 최초 페이지가 로딩될 때 한번 실행되고 setContents() 함수로 state 값이 변경되면 한번 더 실행된다.
	useEffect(()=> {
		console.log('useEffect');
	});

	return (
		<div>
			<h2>{contents}</h2>
			<button onClick={()=> setContents('THIS IS HOOK')}>버튼</button>
		</div>
	)
}

export default R031_ReactHook;
