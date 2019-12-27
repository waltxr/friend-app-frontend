import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import GrievanceForm from './grievanceForm'
import { getUsers } from '../../actions/userActions'
import CreateGroup from '../createGroup'
import GroupList from './groupList'
import GroupHome from './GroupHome'



class UserProfile extends Component {

  componentWillMount() {
    this.props.getUsers()
  }

  componentDidMount() {
    const {currentUser, history} = this.props
    history.push(currentUser.name.toLowerCase()+'-'+currentUser.id)
  }

  render() {
    const newUser = (
      <CreateGroup />
    )

    const groupList = (
      <GroupList groups={this.props.currentUser.groups} />
    )

    const selectGroup = (
      <Container style={{ marginTop: '7em' }}>
        { this.props.currentUser.groups.length > 0 ? groupList : newUser}
      </Container>
    )

    // const groupHome = (
    //   <Container text style={{ marginTop: '7em' }}>
    //     {this.props.currentUser.name}
    //     <GrievanceForm users={this.props.users} />
    //     <GrievanceList user={this.props.currentUser} type='filed_grievances'/>
    //     <GrievanceList user={this.props.currentUser} type='received_grievances'/>
    //   </Container>
    // )


    return(
      <Container>
        { this.props.currentGroup === false ? selectGroup : <GroupHome /> }
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    currentUser: state.app.currentUser,
    currentUserComments: state.app.userComments,
    users: state.users.list,
    currentGroup: state.app.currentGroup
  }
}

export default UserProfile = withRouter(connect(mapStateToProps, {getUsers})(UserProfile))
