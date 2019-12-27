import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const MemberCard = (props) => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{props.member.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default MemberCard
