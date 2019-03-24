import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import SideMenu from '../sideMenu'
import GrievanceForm from './grievanceForm'
import { getUsers } from '../../actions/userActions'


class UserProfile extends Component {

  componentWillMount() {
    this.props.getUsers()
  }

  componentDidMount() {
    const {user, history} = this.props
    history.push(user.name.toLowerCase()+'-'+user.id)
  }

  render() {
    console.log(this.props);
    return(
      <Container text style={{ marginTop: '7em' }}>
        {this.props.user.name}
        <GrievanceList user={this.props.user} filed_grievances={this.props.filed_grievances}/>
        <GrievanceForm users={this.props.users} />
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    users: state.users.list
  }
}

export default UserProfile = withRouter(connect(mapStateToProps, {getUsers})(UserProfile))
