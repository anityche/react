import React, {Component} from "react";
import datatype from 'prop-types';

/**
 * props의 자식 component에 node 전달하기
 * 1. 상위 컴포넌트에서 전달한 노드는 this.props.children 문법으로 접근해 사용
 */
class R023_PropsNode extends Component {

	render(){
		return (
			<div style={{padding: "0px"}}>
				{this.props.children}
			</div>
		)
	}
}

export default R023_PropsNode;
