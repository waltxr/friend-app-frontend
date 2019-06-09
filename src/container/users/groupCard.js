import React from 'react'
import { Card, Icon } from 'semantic-ui-react'


const GroupCard = (props) => {
  console.log(props.group.name);
  return(
    <Card>
      <Card.Content header={props.group.name} />
      <Card.Content extra>
        <Icon name='user' />
        {props.group.members.length} Members
      </Card.Content>
    </Card>
  )
}

export default GroupCard
