import React, {Component} from "react";

/**
 * Component 사용하기 (클래스형 컴포넌트)
 * 1. setState() 함수로 실행한 값은 이전에 있던 state 변수값과 동일하여도 
 * 	component에서는 새로운 state 변수가 같은 이름으로 생성됐다고 인식한다.
 */
class R027_ComponentClass extends Component {
	constructor (props) {
		super(props);
		// 초기값
		this.state= {
			StateString: 'react',
			StateArrayObj: ['react', {react: '200'}],
		}
	}

	buttonClick = (type) => {
		// 초기값과 동일한 state 값을 setState() 함수로 선언 및 초기화
		// 이때 컴포넌트는 state 값이 변경 됐다고 간주하고 render() 함수를 실행
		// 즉, 값이 같더라도 setState() 함수는 render() 함수를 호출한다.
		if (type === 'string'){
			this.setState({ StateString: 'react' }) 
		}else {
			this.setState({ StateArrayObj: ['react', {react: '200'}] })
		}
	}
	
	render(){
		console.log('render...') // render() 함수 호출 확인 로그

		return (
			<div style={{padding: "0px"}}>
				<button onClick={e => this.buttonClick('string')}>
					문자열 변경
				</button>
				{this.state.StateString}
				<br/>
				<button onClick={e => this.buttonClick('arrayObj')}>
					객체 배열 변경
				</button>
				{this.state.StateArrayObj[1].react}
			</div>
		)
	}
}

export default R027_ComponentClass;
