import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import GrievanceForm from './grievanceForm'
import GroupMembers from './GroupMembers'

class GroupHome extends Component {

  render() {
    console.log(this.props);
    return (
      <Container text style={{ marginTop: '7em' }}>
        {this.props.currentUser.name}
        <GroupMembers members={this.props.currentGroup.members}/>
        <GrievanceForm users={this.props.users} />
      </Container>
    )
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state.app.currentUser,
    currentUserComments: state.app.userComments,
    users: state.users.list,
    currentGroup: state.app.currentGroup

  }
}

export default GroupHome = withRouter(connect(mapStateToProps, {})(GroupHome))
