import React from 'react'
import { Image, Item, Label, Button } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import image from '../../images/image.png'

const Grievance = (props) => {
  return (
    <Item>
      <Item.Image src={image} />
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
