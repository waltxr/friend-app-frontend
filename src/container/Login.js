import React, { Component } from 'react';
import { Button, Form, Container, Header, Message } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { authenticate } from '../actions/appActions';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  errorHandling = () => {
    if (this.props.errors) {
      return (
        <Message negative>
         <Message.Header>
           {this.props.errors}
         </Message.Header>
        </Message>
      )
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.authenticate(this.state)
    } else {
      window.alert("Both email and password are required fields.")
    }
  }

  render() {
    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h3'>Log in:</Header>
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
             type='password'
             value={this.state.password}
             onChange={this.handleChange}
           />
         </Form.Field>
         <Button type='submit'>Submit</Button>
          {this.errorHandling()}
       </Form>
     </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    errors: state.app.errors
  }
}

export default Login = withRouter(connect(mapStateToProps, {authenticate})(Login));
