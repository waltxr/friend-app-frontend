import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Card, Header, Grid, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import GroupMembers from './GroupMembers'
import GroupPostsMenu from './GroupPostsMenu'
import { joinGroupButton } from '../../actions/appActions';


class GroupHome extends Component {

  handleClick = (e) => {
    e.preventDefault();
    console.log('pressed join button');
    this.props.joinGroupButton(this.props.currentGroup)
  }

  render() {

    const joinButton = (
      <Button onClick={this.handleClick} primary>Join Group</Button>
    )

    return (
      <Grid divided='vertically' text style={{ marginTop: '7em' }}>
        <Header>{this.props.currentGroup.name}</Header>
        { this.props.currentGroup.members.includes(this.props.currentuser) ? null : joinButton }
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

export default GroupHome = withRouter(connect(mapStateToProps, {joinGroupButton})(GroupHome))
