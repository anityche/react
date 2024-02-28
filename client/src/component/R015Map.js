import React, {Component} from "react";

/**
 * forEach 함수
 */
class R015Map extends Component {
	
	componentDidMount(){
		var mapArr = [3,2,8,8]
		let mapNewArr = mapArr.map(x => x)
		console.log('1. mapNewArr', mapNewArr)

		let mapMulitiArr = mapArr.map(x=> x*2)
		console.log('2. mapMulitiArr', mapMulitiArr)

		var objArr = [
			{key: 'react', value: '200'},
			{key: '리액트', value: 'TwoHundred'},
		];
		let mapObjArr = objArr.map((obj, index)=> {
			console.log((index+3), '. obj: '+ JSON.stringify(obj))
			var nObj = {};
			nObj[obj.key] = obj.value;
			return nObj;
		});
		console.log('5. mapObjArr', JSON.stringify(mapObjArr))
	}

	render(){
		return (
			<h2>[This is Map]</h2>
		)
	}
}

export default R015Map;