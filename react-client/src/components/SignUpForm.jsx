import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Redirect, Route} from 'react-router-dom';
import ChatApp from './ChatApp.jsx';

export class SignUpForm extends React.Component  {
	constructor(props) {
		super(props)
		this.state = {
			username:"",
			email: "",
			password:"",
			redirect:false
		};
	}

	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value 
		})
		
	}

	handleSubmit(e){

		e.preventDefault();

	
	    $.ajax({
		    url: '/sign-up', 
		    type:'POST',
		    'contentType':'application/json',
		    data: JSON.stringify(this.state),
		    success: (data) => {
		    		console.log(data);
		    		this.setState({redirect: true})
		      
		    },
		    error: (err) => {
		       console.log('err', err);
		    }
	    });
	}

	render() {
		const form= {marginTop:"70px"};
		const formStyle = {width:"25%", textAlign: "left"};
		const buttonStyle1 = {width:"100%",  marginTop:"10px", color:"white", fontSize:"20px", padding:"7px", textAlign: "center" } ;
    <Route path="/chatapp" exact component={ChatApp}/>

    if(this.state.redirect){
    	return  <Redirect to="chatapp" />
    }

		return (
			<div style={form}>
				<form className="form-group" style={formStyle} onSubmit = {this.handleSubmit.bind(this)}>
					<div>
					  <label>Username</label>
					  <input  className="form-control" type="text" value= {this.state.username} 
					  name ="username" placeholder = "Enter username" onChange={this.handleChange.bind(this)}/>
					</div>
					<div>
					 <label>Email</label>
					  <input className="form-control" type="email" value = {this.state.email} 
					  name ="email" placeholder = "Enter your email" onChange={this.handleChange.bind(this)}/> 
					</div>
					<div>
					  <label>Password</label>
					  <input className="form-control" type="password" value= {this.state.password} 
					  name ="password" placeholder = "Enter your password" onChange={this.handleChange.bind(this)}/> 
					</div>
					<center><button style ={buttonStyle1} className="btn btn-primary"> Sign Up </button></center>
					
				</form>
				<button type="submit" className="btn btn-secondary" > Already I have account </button>
			</div>
		);
	}
}

export default SignUpForm;