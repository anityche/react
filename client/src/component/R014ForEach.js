import React, {Component} from "react";

class R014ForEach extends Component {
	
	componentDidMount(){
		// for
		var forArr = [3,2,8,8]
		var forNewArr = []
		for (var i=0; i < forArr.length; i++){
			forNewArr.push(forArr[i])
		}
		console.log('1. forNewArr', forNewArr)

		// forEach
		var forEachArr = [3,3,9,8]
		var forEachNewArr = []
		forEachArr.forEach(result=>{
			forEachNewArr.push(result)
		})
		console.log('2. forEachNewArr', forEachNewArr)
	}

	render(){
		return (
			<h2>[This is For and ForEach]</h2>
		)
	}
}

export default R014ForEach;