import React, {Component} from "react";

/** component 의 생성
 * react 에서 생명주기란, component 의 생성, 변경, 소멸의 과정을 뜻 한다.
 * 생성에 속하는 함수 : render, constructor, getDerivedStateFromProps, componentDidMount
 */
class R004LifecycleEx extends Component {
	render(){
		console.log('3. render Call');
		return (
			<h2>[This is render function]</h2>
		)
	}
}

export default R004LifecycleEx;