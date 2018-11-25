import React from 'react';

import Message from './Message.jsx';

const socket = io.connect('http://127.0.0.1:3000')
class ChatApp extends React.Component {

   constructor(props) {
		super(props)
		this.state = {
			message:"",
			data:[]
		};
	}

  componentDidMount() {
    socket.on('chat', (output) => {
    	console.log(output);
    	var arr = Array.from(this.state.data)
    	arr.push(output);
    	this.setState({
    		data: arr
    	})
    })
  }
   
  handleChange(e){
		this.setState({
			message : e.target.value 
		});	
	}

	sendMessage(){
		socket.emit('chat', {
			message:this.state.message
		})
	}

	render() {
		const style = {width:"30%", textAlign: "left", padding:"7px" , height:"70px"};
		return (
			<div style={style}>
	      <div className="card">
				  { 
				  	this.state.data.map((ele) => (
				  			<Message data = {ele} />
				  		))
				  }
				</div>
				<div className="row">
				  <div className="col-md-10">
					  <textarea className="form-control" value={this.state.message} onChange={this.handleChange.bind(this)}
					  name ="message" placeholder = "Enter Message" rows="1" />
				  </div>
				  <div className="col-md-2"> 
				    <button onClick={this.sendMessage.bind(this)} className="btn btn-primary" >Send</button>
				  </div>
				</div>
			</div>

		);
	}
}

export default ChatApp;