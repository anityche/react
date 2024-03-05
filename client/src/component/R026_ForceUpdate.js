import React, {Component} from "react";

/**
 * state 직접 변경 후 forceUpdate() 함수 사용
 * 1. button의 onClick 이벤트로 this.state.변수명=value 문법으로 
 * state를 직접 변경한다. StateString 값은 '리액트'로 변경된다.
 */
class R026_ForceUpdate extends Component {
	constructor (props) {
		super(props);
		this.state= {
			StateString: 'react',	// 초기값
		}
	}

	// 함수
	StateChange = () => {
		this.state.StateString = '리액트';
		this.forceUpdate();
	}

	render(){
		return (
			<div style={{padding: "0px"}}>
				<button onClick={(e) => this.StateChange('direct', e)}>
					state 직접 변경
				</button><br/>
				[state 변경하기] StateString : {this.state.StateString}
			</div>
		)
	}
}

export default R026_ForceUpdate;
