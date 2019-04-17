import React from 'react'
import { Item, Label, Button } from 'semantic-ui-react'
import ReceiverList from './receiverList'

const Grievance = (props) => {
  return (
    <Item>
      <Item.Content>
        <Item.Header as='a'>{props.title}</Item.Header>
        <Item.Meta>
          <span className='cinema'>Grievance</span>
        </Item.Meta>
        <Item.Description>{props.description}</Item.Description>
          <ReceiverList receivers={props.receivers} />
      </Item.Content>
    </Item>
  )
}

export default Grievance
