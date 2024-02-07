import React, {Component} from "react";

/** ES6 class
 * 
 */
class R012ClassPrototype extends Component {
	constructor(props){
		super(props);
		this.state={};
		console.log('1. constructor Call');
	}

	componentDidMount(){
		// // ES5 prototype
		// var examCountFunc = (function(){
		// 	function examCount(num){
		// 		this.number = num;
		// 	}
		// 	examCount.prototype.showNum = function(){
		// 		console.log('1. react_'+ this.number);
		// 	};
		// 	return examCount;
		// }());

		// var cnt = new examCountFunc('200')
		// cnt.showNum();

		// ES6 class
		class ExamCountClass {
			constructor(num2){
				this.number2 = num2;
			}
			showNum(){
				console.log(`2. react_${this.number2}`);
			}
		}

		var cnt2 = new ExamCountClass('2hundred');
		cnt2.showNum();
	}

	render(){
		console.log('3. render Call');
		return (
			<h2>[This is Class]</h2>
		)
	}
}

export default R012ClassPrototype;