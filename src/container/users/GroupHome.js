import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Card, Header, Grid} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import GroupMembers from './GroupMembers'
import GroupPostsMenu from './GroupPostsMenu'

class GroupHome extends Component {

  render() {
    return (      
      <Grid divided='vertically' text style={{ marginTop: '7em' }}>        
        <Header>{this.props.currentGroup.name}</Header>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <GroupMembers members={this.props.currentGroup.members}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <GroupPostsMenu users={this.props.users}/>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
