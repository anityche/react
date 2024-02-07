import React, {Component} from "react";

/** component 의 생성
 * constructor 함수는 생명주기 함수 중 가장 먼저 실행 되며, 최초 한 번만 호출된다.
 * component 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화할 때 사용한다.
 * super 함수는 가장 먼저 호출해야 한다.
 */
class R005LifecycleEx extends Component {
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

export default R005LifecycleEx;