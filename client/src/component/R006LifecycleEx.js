import React, {Component} from "react";

/** component 의 생성
 * getDerivedStateFromProps 함수는 constructor 함수 다음으로 실행된다.
 * 컴포넌트가 새로운 props를 받게 되면 state 를 변경 해준다.
 * App.js 에서 전달한 prop_value 라는 변수를 props.prop_value 로 접근해 가져온다.
 */
class R006LifecycleEx extends Component {
	static getDerivedStateFromProps(props, state){
		console.log('2. getDerivedStateFromProps Call: ', props.prop_value);
		return{};
	} 

	constructor(props){
		super(props);
		this.state={};
		console.log('1. constructor Call');
	}

	render(){
		console.log('3. render Call');
		return (
			<h2>[This is constructor function]</h2>
		)
	}
}

export default R006LifecycleEx;