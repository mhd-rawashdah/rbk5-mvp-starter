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
     const activeStyle = {fontSize:"30px", color:"red"};
     const title = {marginBottom:"40px", marginTop:"30px"}
    return (
     <Router>
      <div>
        <h1 style={title}>chat app</h1>
         
         <NavLink display={this.state.shown? "block": "none"}
         activeStyle={activeStyle} exact  to="/">Sign Up</NavLink>
         <NavLink display={this.state.shown? "block": "none"} 
         activeStyle={activeStyle} to="/sign-in"> Sign In</NavLink>

        <Route path="/" exact component={SignUpForm}/>
        <Route path="/sign-in" exact component={SignInForm}/>
        <Route path="/chatapp" exact component={ChatApp}/>
      </div>
     </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));