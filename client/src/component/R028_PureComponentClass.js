import React, {PureComponent} from "react";

/**
 * PureComponent 사용하기 (클래스형 컴포넌트)
 * 1. PureComponent에서는 비교 대상의 값을 비교해 동일하지 않으면 변경이 발생했다고 본다. 
 * 	불필요한 render() 함수 실행을 줄이면 페이지 성능을 향상시킬 수 있다.
 * 2. PureComponent에서는 기본적으로 변수 값만 비교하지만 예외적으로 객체에 대해서는 참조 값을 비교한다.
 * 3. 참조 값이란, 객체를 생성했을 때 저장되는 메모리 주소다. 완전히 동일한 객체라도 새로 선언하면 참조 값이 다르다.
 */
class R028_PureComponentClass extends PureComponent {
	constructor (props) {
		super(props);
		// 초기값
		this.state= {
			StateString: 'react',
			StateArrayObj: ['react', {react: '200'}],
		}
	}

	buttonClick = (type) => {
		if (type === 'string'){
			this.setState({ StateString: 'react' }) 
		}else {
			// 그래서 render() 함수가 호출 되는 것을 확인할 수 있었다d
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

export default R028_PureComponentClass;
