import React, {Component} from "react";

/** component 의 생성
componentDidMount 함수는 작성한 함수들 중 가장 마지막으로 실행된다.
return 되는 html 코드를 화면에 그려준 후 실행된다.
화면이 모두 그려진 후 실행하는 이벤트 처리, 초기화 등 가장 많이 사용된다.
*/
class R007LifecycleEx extends Component {
	static getDerivedStateFromProps(props, state){
		console.log('2. getDerivedStateFromProps Call: ', props.prop_value);
		return{tmp_state: props.prop_value};
	} 

	constructor(props){
		super(props);
		this.state={};
		console.log('1. constructor Call');
	}

	componentDidMount(){
		console.log('4. componentDidMount Call');
		console.log('5. tmp_state: ', this.state.tmp_state);
	}
	
	render(){
		console.log('3. render Call');
		return (
			<h2>[This is componentDidMount function]</h2>
		)
	}
}

export default R007LifecycleEx;