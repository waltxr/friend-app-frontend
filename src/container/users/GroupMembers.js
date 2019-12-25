import React, { Component } from 'react'
import { Container, Card, Header } from 'semantic-ui-react'
import MemberCard from './MemberCard'

class GroupMembers extends Component {

  render() {
    const members = this.props.members
    .map( member => <MemberCard member={member} key={member.id} />)

    return (
      <Container>
        <Card.Group>
        <Header>Group Members</Header>
          {members}
        </Card.Group>
      </Container>
    )
  }
}

export default GroupMembers
