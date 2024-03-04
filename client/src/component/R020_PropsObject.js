import React, {Component} from "react";
import datatype from 'prop-types';

/**
 * props 객체형 사용 방법의 이해
 * 1. ObjectJson 객체변수 key 값에 대해 자료형을 선언
 * 2. twohundred가 문자열("200")로 전달됐지만, 자료형이 number로 선언됐다
 * 3. 자료형이 일치하지 않아 경고 메시지가 발생
 */
class R020_PropsObject extends Component {

	render(){
		let {
			ObjectJson
		} = this.props
		return (
			<div style={{padding: "0px"}}>
				{JSON.stringify(ObjectJson)}
			</div>
		)
	}
}

R020_PropsObject.propTypes= {
	ObjectJson: datatype.shape({
		react: datatype.string,
		twohundred: datatype.number,
	})
}

export default R020_PropsObject;