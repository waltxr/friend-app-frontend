import React, { Component } from 'react';
import { Form, Button, Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/appActions';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.signup(this.state)) {
      this.props.history.push('/user_profile')
      window.alert("Thank you for signing up.")
    } else {
      window.alert("We're having issues creating your account.")
    }
  }

  render() {
    return(
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h3'>Sign Up!</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name:</label>
            <input
              placeholder="name..."
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email:</label>
            <input
              placeholder="email..."
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input
              placeholder="password..."
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Confirm Password:</label>
            <input
              placeholder="password confirmation..."
              name='password_confirmation'
              value={this.state.password_confirmation}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Signup = withRouter(connect(null, {signup})(Signup));
