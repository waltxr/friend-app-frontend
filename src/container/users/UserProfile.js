import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import GrievanceForm from './grievanceForm'
import { getUsers } from '../../actions/userActions'


class UserProfile extends Component {

  componentWillMount() {
    this.props.getUsers()
  }

  componentDidMount() {
    const {currentUser, history} = this.props
    history.push(currentUser.name.toLowerCase()+'-'+currentUser.id)
  }

  render() {
    return(
      <Container text style={{ marginTop: '7em' }}>
        {this.props.currentUser.name}
        <GrievanceForm users={this.props.users} />
        <GrievanceList user={this.props.user} />
      </Container>
    )
  }

}

const mapStateToProps = (state) => {  
  return {
    currentUser: state.app.currentUser,
    currentUserComments: state.app.userComments,
    currentUserGrievances: state.app.userGrievances,
    users: state.users.list,
    created_grievances: state.created_grievances
  }
}

export default UserProfile = withRouter(connect(mapStateToProps, {getUsers})(UserProfile))
