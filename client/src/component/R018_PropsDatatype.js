import React, {Component} from "react";
import datatype from 'prop-types';

/**
 * props 자료형 선언 방법을 이해한다.
 * 자식 컴포넌트에서 props에 대한 자료형을 선언해 놓으면, 부모 컴포넌트에서 넘어오는 props 변수들의 자료형과 비교한다.
 * 이때 자료형이 일치하지 않으면, 경고 메시지로 알려주기 때문에 데이터를 확인할 수 있다.
 */
class R018_PropsDatatype extends Component {

	render(){
		let {
			String, Number, Boolean, Array, ObjectJson, Function
		} = this.props
		// console.log('this.props', this.props)
		return (
			<div style={{padding: "0px"}}>
					<p>StringProps: {String}</p>
					<p>NumberProps: {Number}</p>
					<p>BooleanProps: {Boolean.toString()}</p>
					<p>ArrayProps: {Array.toString()}</p>
					<p>ObjectJsonProps: {JSON.stringify(ObjectJson)}</p>
					<p>FunctionProps: {Function}</p>
			</div>
		)
	}
}

// 자료형이 일치하지 않을때 console 창에 log를 확인할 수 있다. (string)
R018_PropsDatatype.propTypes = {
	String: datatype.number,
	Number: datatype.number,
	Boolean: datatype.bool,
	Array: datatype.array,
	ObjectJson: datatype.object,
	Function: datatype.func,
}

export default R018_PropsDatatype;