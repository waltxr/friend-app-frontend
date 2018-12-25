import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { logout } from '../actions/authActions';
import { Menu, Container } from 'semantic-ui-react'

class Navigation extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/')
  }

  render() {
    
    const mainNav = (
      <Container>
        <Menu.Item as='a' header>
          <Link to="/login">Log In</Link>
        </Menu.Item>
        <Menu.Item as='a' header>
          <Link to="/signup">Sign Up</Link>
        </Menu.Item> 
      </Container>
    )
    
        const userNav = (
      <Container>
        <Menu.Item as='a' header>
          <Link to='/user/'>Profile</Link>
        </Menu.Item>
        <Menu.Item as='a' header onClick={(e) => this.handleLogout(e)}>
          Log Out
        </Menu.Item>
      </Container>
    )

    return (      
        <Menu fixed='top' inverted>
            {this.props.isAuthenticated ? userNav : mainNav}          
        </Menu>      
    )
  }
  
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));
