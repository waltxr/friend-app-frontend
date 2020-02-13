import React, { Component } from 'react';
import { Button, Form, Container, Header, Message, Grid, Image, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { authenticate } from '../actions/appActions';
import Navigation from '../routes/Navigation';
import logo from '../images/logo.png'

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
      // this.props.history.push('/profile')
    } else {
      window.alert("Both email and password are required fields.")
    }
  }

  render() {
    const {isAuthenticated} = this.props

    return (
      <div>
        <Navigation isAuthenticated={isAuthenticated} />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
           <Grid.Column style={{ maxWidth: 450 }}>
             <Header as='h2' color='black' textAlign='center'>
                <Image src={logo} /> Log in to your account
             </Header>
             <Form onSubmit={this.handleSubmit}>
             <Segment stacked>
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
               </Segment>
            </Form>
            <Message>
              New to Friend App? <Link to='/signup'>Sign Up</Link>
            </Message>
           </Grid.Column>
        </Grid>
     </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.app.isAuthenticated,
    errors: state.app.errors
  }
}

export default Login = withRouter(connect(mapStateToProps, {authenticate})(Login));
