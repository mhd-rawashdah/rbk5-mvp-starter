import React from  'react';

class Message extends React.Component {
	constructor(props) {
		super(props)
		this.state = {};
	}
  
	render() {
		const box = {minWidth: "-webkit-min-content", display: "flex", color:"blue" , fontWeight:"blod"}
		return (
			<div>
			  <label style={box}>{this.props.data.handle}</label>
			  <p>{this.props.data.message}</p>
			</div>

		);
	}
}
export default Message;