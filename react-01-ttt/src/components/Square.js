/**
 * class 컴퍼넌트
 */
/* import { Component } from "react";
import './Square.css'

export default class Square extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		value: null,
	// 	}
	// }---> board.js 로 옮김

	render() {
		return (
			<button className="square" 
				onClick={() => { this.props.onClick() }}
			>
				{this.props.value}
			</button>
		);
	} 
} */


/**
 * function 컴퍼넌트
 */
import React from 'react';
import './Square.css'

const Square = (props) => {
	return (
		<button className="square" 
			onClick={() => { props.onClick() }}
		>
			{props.value}
		</button>
	)
}

export default Square