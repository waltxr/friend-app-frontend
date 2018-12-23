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
      <ul>        
        <li><Link to="/login">
              <Menu.Item>Log In</Menu.Item>
            </Link>
        </li>
        <li><Link to="/signup">
              <Menu.Item>Sign Up</Menu.Item>
            </Link>
        </li>
      </ul>
    )

    const userNav = (
      <ul>        
        <li><Link to="/user_profile">Profile</Link></li>
        <li onClick={(e) => this.handleLogout(e)}>Log Out</li>
      </ul>
    );

    return (      
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              Friend App
            </Menu.Item>
            {this.props.isAuthenticated ? userNav : mainNav}
          </Container>            
        </Menu>      
    )
  }
}

export default Navigation = withRouter(connect(null, {logout})(Navigation));
