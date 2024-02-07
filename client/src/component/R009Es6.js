import React, {Component} from "react";

/** ES6 String
 * 
 */
class R009Es6 extends Component {
	constructor(props){
		super(props);
		this.state={};
		console.log('1. constructor Call');
	}

	componentDidMount(){
		var jsStr1 = '자바스크립트'
		var jsStr2 = '입니다\n다음 줄입니다.'
		console.log(jsStr1+ '문자열 '+ jsStr2)

		var esStr1 = 'ES6'
		var esStr2 = '입니다.'
		console.log(`${esStr1} 문자열${esStr2}!!
____다음 줄입니다.`)

		var longStr = 'ES6에 추가된 String 함수들입니다'
		console.log('startsWith: '+ longStr.startsWith('ES6에 추가'))
		console.log('endsWith: '+ longStr.endsWith('함수들입니다'))
		console.log('includes: '+ longStr.includes('추가된 String'))

		// SpreadOperator (es6)
		var obj1 = {key1: 'val1', key2: 'val2'};
		var obj2 = {key2: 'new2', key3: 'val3'};
		var sumobj = {...obj1, ...obj2}
		console.log('sumobj', sumobj)
		var {key1, key3, ...others} = sumobj;
		console.log('key1', key1, 'key2', key3, 'others', JSON.stringify(others))
	}

	render(){
		console.log('3. render Call');
		return (
			<h2>[This is ES6 String]</h2>
		)
	}
}

export default R009Es6;