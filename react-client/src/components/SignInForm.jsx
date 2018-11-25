import React, { Component } from 'react';
import $ from 'jquery';

export class SignInForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username:"",
			password:""
		};

	}

	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value 
		})
		
	}

	handleSubmit(e){

		e.preventDefault();

		console.log(this.state);
	    $.ajax({
		    url: '/sign-in', 
		    type:'POST',
		    'contentType':'application/json',
		    data: JSON.stringify(this.state),
		    success: (data) => {
		      
		    },
		    error: (err) => {
		       console.log('err', err);
		    }
	    });
	}



	render() {
		const form= {marginTop:"100px"};
		const formStyle = {width:"25%", textAlign: "left"};
		const buttonStyle1 = {width:"100%",  marginTop:"10px", color:"white", fontSize:"20px", padding:"7px", textAlign: "center" } ;
		return (
			<div style={form}>
				<form className="form-group" style={formStyle} onSubmit = {this.handleSubmit.bind(this)}>
					<div>
					  <label>Username</label>
					  <input  className="form-control" type="text" value= {this.state.username} 
					  name ="username" placeholder = "Enter username" onChange={this.handleChange.bind(this)}/>
					</div>
					<div>
					  <label>Password</label>
					  <input className="form-control" type="password" value= {this.state.password} 
					  name ="password" placeholder = "Enter your password" onChange={this.handleChange.bind(this)}/> 
					</div>
					<center><button type="submit" style ={buttonStyle1} className="btn btn-primary"> Sign In </button></center>
					
				</form>
				<button className="btn btn-secondary" > Create new account</button>
			</div>
		);
	}
}

export default SignInForm;