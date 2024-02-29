import React, {Component} from "react";
import datatype from 'prop-types';

/**
 * props 객체형 사용 방법의 이해
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