import React, {Component} from "react";

/**
 * props Boolean의 사용 방법의 이해
 * 
 */
class R019_PropsBoolean extends Component {

	render(){
		let {
			BooleanTrueFalse
		} = this.props
		return (
			<div style={{padding: "0px"}}>
				{BooleanTrueFalse ? '1. ': '0. '}
				{BooleanTrueFalse.toString()}
			</div>
		)
	}
}

export default R019_PropsBoolean;