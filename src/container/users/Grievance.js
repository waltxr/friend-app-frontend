import React from 'react'
import { Item } from 'semantic-ui-react'

const Grievance = (props) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header>{props.title}</Item.Header>
        <Item.Description>{props.description}</Item.Description>
      </Item.Content>
    </Item>
  )
}

export default Grievance
