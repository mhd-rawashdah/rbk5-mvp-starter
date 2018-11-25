import React from  'react';

class Message extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
	}
  
	render() {
		const labelSt = {color:"blue" , fontWeight:"blod"}
		return (
			<div>
			  <label style={labelSt}>@Mohammad</label>
			  <p>{this.props.data.message}</p>
			</div>

		);
	}
}
export default Message;