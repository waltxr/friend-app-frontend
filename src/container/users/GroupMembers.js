import React, { Component } from 'react'
import { Container, Card, Header } from 'semantic-ui-react'
import MemberCard from './MemberCard'

class GroupMembers extends Component {

  render() {
    const members = this.props.members
    .map( member => <MemberCard member={member} key={member.id} />)

    return (
      <Card>
        <Card.Content>
          <Card.Header>Group Members</Card.Header>
        </Card.Content>
        <Card.Content>
          {members}
        </Card.Content>
      </Card>
    )
  }
}

export default GroupMembers
