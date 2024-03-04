import React, {Component} from "react";
import datatype from 'prop-types';

/**
 * state 사용
 * 1. props를 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 때 사용했다면, 
 * state는 하나의 컴포넌트 안에서 전역 변수처럼 사용한다.
 * 2. 가장 먼저 실행되는 생성자 함수 안에서 state 변수의 초기값을 정의해야한다.
 * 3. StateString 변수에는 props로 전달된 reactString 값을 저장하고 StateNumber 변수에는 숫자를 저장한다.
 * 4. this.state.변수명 문법으로 state 변수에 접근, 값을 화면에 그대로 표시한다.
 */
class R024_ReactState extends Component {
	constructor (props) {
		super(props);
		this.state= {
			StateString: this.props.reactString,
			StateNumber: 200,
		}
	}

	render(){
		return (
			<div style={{padding: "0px"}}>
				<div>
					{this.state.StateString}
				</div>
				<div>
					{this.state.StateNumber}
				</div>
			</div>
		)
	}
}

export default R024_ReactState;
