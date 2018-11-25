import React from 'react';

import Message from './Message.jsx';

const socket = io.connect('http://127.0.0.1:3000')
class ChatApp extends React.Component {

   constructor(props) {
		super(props)
		this.state = {
			message:"",
			data:[],
			typing:""
     };

	}

  componentDidMount() {
    socket.on('chat', (output) => {
    	this.setState({typing:""});
    	console.log(output);
    	var arr = Array.from(this.state.data)
    	arr.push(output);
    	this.setState({
    		data: arr
    	})
    });

    socket.on("typing", (data) => {
    	this.setState({typing: data+" write now"});
    });
  }
   
   handleChange(e){
		this.setState({
			message : e.target.value 
		});	
	}

	sendMessage(){
		socket.emit('chat', {
			handle: this.props.location.state.username,
			message:this.state.message
		})

		this.setState({message:""});
		
	}

	hanldeKeypress(){
		socket.emit("typing", this.props.location.state.username);
	}

	render() {
		const style = {width:"60%", textAlign: "left", padding:"10px" };
		const content ={flex: "1", display: "flex", overflow: "auto" , height:"500px" ,flexDirection: "column"}
		return (
			<div className="jumbotron" style={style}>
			  <h3>{this.props.location.state.username}</h3>
		      <div style={content}>
				  { 
				  	this.state.data.map((ele) => (
				  			<Message data = {ele} />
				  		))
				  }
				</div>
				<label>{this.state.typing} </label>
				<div className="row">
				  <div className="col-md-10">
					  <textarea className="form-control" value={this.state.message}
					   onChange={this.handleChange.bind(this)} onKeyPress={this.hanldeKeypress.bind(this)}
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

