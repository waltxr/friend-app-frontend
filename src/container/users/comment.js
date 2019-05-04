import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import image from '../../images/image.png'

const ItemComment = (props) => {  
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>{props.user.name}</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>{props.body}</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  )
}

export default ItemComment
