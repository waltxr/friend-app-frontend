import React from 'react'
import { Image, Item, Label, Button, Comment } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import image from '../../images/image.png'
import CommentList from './commentList'


const rendercommentList = (comments) => {
  if (comments.length > 0) {
    return (
      <CommentList comments={comments}/>
    )
  } else {
    return (
      <Comment.Actions>
        <Comment.Action>Reply</Comment.Action>
      </Comment.Actions>
    )
  }
}

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
          {rendercommentList(props.comments)}
      </Item.Content>
    </Item>
  )
}

export default Grievance
