import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Card, Header, Grid, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import GroupMembers from './GroupMembers'
import GroupPostsMenu from './GroupPostsMenu'
import { joinGroupButton } from '../../actions/appActions';
import { leaveGroupButton } from '../../actions/appActions';


class GroupHome extends Component {

  handleJoinClick = (e) => {
    e.preventDefault();
    console.log('pressed join button');
    this.props.joinGroupButton(this.props.currentGroup)
  }

  handleLeaveClick = (e) => {
    e.preventDefault();
    console.log('pressed join button');
    this.props.leaveGroupButton(this.props.currentGroup)
  }

  render() {
    console.log(this.props);
    const joinButton = (
      <Button onClick={this.handleJoinClick} primary>Join Group</Button>
    )

    const memberView = (
      <Grid divided='vertically' style={{ marginTop: '7em' }}>
        <Header>{this.props.currentGroup.name}</Header>
        <Button onClick={this.handleLeaveClick} primary>Leave Group</Button>
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

    const guestView = (
      <Grid divided='vertically' style={{ marginTop: '7em' }}>
        <Header>{this.props.currentGroup.name}</Header>
        <Button onClick={this.handleJoinClick} primary>Join Group</Button>
        <Grid.Row columns={2}>
          <Grid.Column width={6}>
            <GroupMembers members={this.props.currentGroup.members}/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header>Join group to view posts</Header>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

    return (
      <div>
        { this.props.currentGroup.members.filter(member => member.id === this.props.currentUser.id).length > 0 ? memberView : guestView }
      </div>

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

export default GroupHome = withRouter(connect(mapStateToProps, {joinGroupButton, leaveGroupButton})(GroupHome))
