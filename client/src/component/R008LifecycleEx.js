import React, {Component} from "react";

/** component 의 변경
shouldComponentUpdate 함수는 component 의 '변경' 과정에 속한다.
여기서 변경이란 props, state 의 변경을 말한다.
*/
class R008LifecycleEx extends Component {
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

		this.setState({tmp_state2: true});
		/**
		 * componentDidMount 함수는 생명 주기의 함수중 마지막으로 실행된다.
		 * tmp_state2 state 변수에 boolean 데이터를 설정했다.
		 * setState 함수는 변수의 선언과 초기화를 동시에 실행한다.
		 * 
		 * line 23 에서 state 변경으로 인하여 shouldComponentUpdate 함수가 실행된다.
		 * shouldComponentUpdate 함수는 boolean 데이터를 반환하며 true 의 경우에 render() 함수를 호출한다.
		 */
	}

	shouldComponentUpdate(props, state){
		console.log('6. shouldComponentUpdate Call / tmp_state2=', state.tmp_state2);
		return state.tmp_state2;
	}
	
	render(){
		console.log('3. render Call');
		return (
			<h2>[This is shouldComponentUpdate function]</h2>
		)
	}
}

export default R008LifecycleEx;