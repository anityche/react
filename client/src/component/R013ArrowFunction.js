import React, {Component} from "react";

/** 
 * Arrow Function
 */
class R013ArrowFunction extends Component {
	constructor(props){
		super(props);
		this.state={
			arrowFuc: 'reactR013',
			num: 3
		};
	}

	// 각 function의 호출 결과를 확인
	componentDidMount(){
		// debugger;
		Function1(1);
		this.Function2(1,1);
		this.Function3(1,3);
		this.Function4();
		this.Function5(0,2,3);

		function Function1(num1){
			return console.log('function1', num1, 'ES5 function');
			;
		}
	}

	// arrow function 사용
	Function2 = (num1, num2) => {
		let num3 = num1+ num2;
		console.log('function2', num3, '. Arrow Function : ', this.state.arrowFuc);
	}

	// this는 R013ArrowFunction를 의미하므로 callback 함수 내부에서는 this에 접근할 수 없다
	// 하지만 this_bind 라는 변수에 this를 백업 하고 접근이 가능하다
	Function3() {
		var this_bind = this;
		setTimeout(function(){
			console.log('function3', this_bind.state.num, '. ES5 Callback function noBind');
			// 콜백 함수 내부에서 this는 window 객체이므로 this 접근시 undefined 에러 발생
			console.log('function3', this.state.arrowFuc); // error
		}, 100);
	}

	// call back 함수 내부에서는 this에 접근이 불가능하지만 bind(this) 를 통해서 가능하다
	Function4() {
		setTimeout(function(){
			console.log('function4 . ES5 Callback function Bind', this.state.arrowFuc);
		}.bind(this), 100);
	}

	// 화살표 함수에서는 this를 bind 하지 않아도 this를 컴포넌트로 사용해 state 변수에 접근할 수 있다
	Function5 = (num1, num2, num3) => {
		const num4 = num1+ num2+ num3;
		setTimeout(()=>{
			console.log('function5', num4, ' . Arrow Callback function ', this.state.arrowFuc);
		}, 100);
	}

	render(){
		return (
			<h2>[This is Arrow Function]</h2>
		)
	}
}

export default R013ArrowFunction;