import React, {Component} from "react";
import $ from 'jquery';

/**
 * jquery lib 사용
 * 1. npm install jquery (or yarn add jquery)
 * 2. import jquery 
 */
class R015Map extends Component {

	input_alert = (e) => {
		var input_val = $('#inputId').val()
		alert(input_val)
	}
	
	render(){
		return (
			<div>
			<h2>[This is Jquery]</h2>
			<input id="inputId" name="inputName" />
			<button id="buttonId" onClick={e => this.input_alert(e)}>Jquery Button</button>
			</div>
		)
	}
}

export default R015Map;