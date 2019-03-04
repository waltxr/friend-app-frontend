import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import SideMenu from '../sideMenu'
import GrievanceForm from './grievanceForm'
import { getUsers } from '../../actions/userActions'


class UserProfile extends Component {

  componentDidMount() {
    const {user, history, getUsers, users} = this.props
    history.push(user.name.toLowerCase()+'-'+user.id)
    getUsers()
  }

  render() {
    console.log(this.props);
    return(
      <Container text style={{ marginTop: '7em' }}>
        {this.props.user.name}
        <GrievanceList user={this.props.user}/>
        <GrievanceForm users={this.props.users}/>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default UserProfile = withRouter(connect(mapStateToProps, {getUsers})(UserProfile))
