import React, { Component } from 'react'; 
import { shallowEqualArrays} from 'shallow-equal';

/**
 * Component - ShallowEqual 사용하기
 * 
 * - 사전 패키지 추가
 * 	- 명령 프롬프트에서 : npm install shallow-equal (or yarn add shallow-equal)
 * 
 * 1. shallow-equal의 비교 함수를 사용해 render() 함수 실행 유무를 결정할 수 있다.
 * 2. shallow-equal package는 PureComponent에서 state 값의 변경을 비교하는 것과 동일한 기능의 함수를 제공한다.
 * 3. shallowEqualArrays() 함수를 사용하면 문자열과 배열은 값만 비교한다.
 * 4. 객체는 PureComponent와 동일하게 참조 값을 비교한다. 
 * 5. component 클래스에서도 shouldComponentUpdate(), shallowEqualArrays() 함수를 사용하면 
 * 	PureComponent 클래스처럼 값만 비교해 render() 함수를 실행시킬 수 있다.
 */
class R029_ShallowEqual extends Component {
	constructor (props) {
		super(props);
		// 초기값
		this.state = { StateString: 'react' }
	}

	// 이 함수는 변경된 props와 state 값을 파라미터로 받을 수 있고 반환 값이 true일 때 render() 함수를 실행한다.
	shouldComponentUpdate (nextProps, nextState){
		console.log('shouldComponentUpdate call');
		return !shallowEqualArrays(this.state, nextState);
	}

	componentDidMount(){
		const object = {react: '200'};
		const Array1 = ['리액트', object];
		const Array2 = ['리액트', object];
		const Array3 = ['리액트', { react : '200'}];

		/**
		 * array2와 array3을 비교하면 값은 같지만, 다른 참조 값을 갖는 다른 객체로 판단한다.
		 */
		console.log('shallowEqualArrays (Array1, Array2): ' + shallowEqualArrays (Array1, Array2)); // true
		console.log('shallowEqualArrays (Array2, Array3): ' + shallowEqualArrays (Array2, Array3)); // false
		
		this.setState({StateString : 'react'});
	}
	
	render(){
		console.log('render...') // render() 함수 호출 확인 로그

		return (
			<div style={{padding: "0px"}}>
				
			</div>
		)
	}
}

export default R029_ShallowEqual;
