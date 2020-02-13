import React, { Component } from 'react';
import { Form, Button, Container, Header, Grid, Segment, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signup } from '../actions/appActions';
import Navigation from '../routes/Navigation';
import logo from '../images/logo.png'


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
    const {isAuthenticated} = this.props

    return(
      <div>
        <Navigation isAuthenticated={isAuthenticated} />
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
               <Image src={logo} /> Create a Friend App account
            </Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input
                  placeholder="name..."
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder="email..."
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder="password..."
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <input
                  placeholder="confirm password..."
                  name='password_confirmation'
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Button type='submit'>Sign up</Button>
            </Form>
            </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.app.isAuthenticated
  }
}

export default Signup = withRouter(connect(mapStateToProps, {signup})(Signup));
