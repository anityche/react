import React, {Component} from "react";

/**
 * setState 함수 사용하기
 * 1. this.state.변수명=value 와 같이 state를 직접 변경하면 render() 함수를 호출하지 않으므로 
 * 화면에 보이는 state 값은 바뀌기 전 상태로 남게 된다. setState() 함수로 state를 변경해야 
 * render() 함수를 호출해 변경된 값을 화면에 보여줄 수 있다.
 * 
 */
class R025_ReactSetState extends Component {
	constructor (props) {
		super(props);
		this.state= {
			StateString: 'react',	// 초기값
		}
	}

	// 함수
	StateChange = (flag) => {
		if (flag == 'direct') this.state.StateString = '리액트';
		if (flag == 'setstate') this.setState({StateString: 'set리액트'});
	}

	render(){
		return (
			<div style={{padding: "0px"}}>
				<button onClick={(e) => this.StateChange('direct', e)}>
					state 직접 변경
				</button>
				<button onClick={(e) => this.StateChange('setstate', e)}>
					setState로 변경
				</button>
				<br/>
				[state 변경하기] StateString : {this.state.StateString}
			</div>
		)
	}
}

export default R025_ReactSetState;
