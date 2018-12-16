import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/authActions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  

  handleChange = (e) => {            
    const {name, value} = e.target;        
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {    
    e.preventDefault();
    if (this.props.authenticate(this.state)) {      
      this.props.history.push(`/profile/`)
      window.alert("You're Logged In!")
    } else {
      window.alert("Sorry, something went wrong. Please try logging in again.")
    }
  }

  render() {    
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
         <Form.Field>
           <label>Email:</label>
           <input 
             placeholder='email...' 
             name='email'
             value={this.state.email}
             onChange={this.handleChange}
           />
         </Form.Field>
         <Form.Field>
           <label>Password:</label>
           <input 
             placeholder='password...' 
             name='password'
             value={this.state.password}
             onChange={this.handleChange}
           />
         </Form.Field>
         <Button type='submit'>Submit</Button>
       </Form>
     </div>
    )
  }
}

export default Login = withRouter(connect(null, {authenticate})(Login));
