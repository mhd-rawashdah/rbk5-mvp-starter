import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import SignUpForm from './components/SignUpForm.jsx';
import SignInForm from './components/SignInForm.jsx';
import ChatApp from './components/ChatApp.jsx';
import { BrowserRouter as Router,Route, Link, NavLink } from 'react-router-dom'

class  App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    }
  }


  
  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
     const activeStyle = {fontSize:"25px"};
     const title = {marginBottom:"40px", marginTop:"30px", color:"#fff"}
     const st = {padding:"10px", background:"#990033", color:"#fff"};
     const btnSt = {color:"#fff"}
    return (
     <Router>
      <div>
        <div style={st} className = "row"> 
         <div className="col-md-8"> </div>
         <div className="col-md-1">
           <NavLink style={btnSt} className="btn" activeStyle={activeStyle} exact  to="/">Sign Up</NavLink>
         </div>
         <div className="col-md-2">
           <NavLink style={btnSt} className="btn" activeStyle={activeStyle} to="/sign-in"> Sign In</NavLink>
         </div>
        </div>
        <h1 style={title}>ChatApp</h1>


        <Route path="/" exact component={SignUpForm}/>
        <Route path="/sign-in" exact component={SignInForm}/>
        <Route path="/chatapp" exact component={ChatApp}/>
      </div>
     </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));