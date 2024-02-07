import React, {Component} from "react";

/**
 * component 란, 특정 코드 뭉치를 다른 부분에 이식 또는 재사용하기 위해 코드 블록 단위를 말한다.
 * component 를 파일 단위로 작성 후 필요한 위치에서 import 하여 사용한다.
 */
class R003ImportConponent extends Component {
	render(){
		return (
			<h2>[This is Imported Component]</h2>
		)
	}
}

export default R003ImportConponent;