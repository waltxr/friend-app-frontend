import React from 'react'
import { Image, Item, Label, Button, Comment, Form, Container, Input } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import image from '../../images/image.png'
import CommentList from './commentList'
import { connect } from 'react-redux'




const Grievance = (props) => {

  const commentList = []

  const renderCommentList = (comments) => {
    if (comments.length > 0) {      
      comments.map((comment_id) => {
        commentList.push(props.userComments[comment_id])
      })
      return (
        <CommentList comments={commentList}/>
      )
    } else {
      return null
    }
  }


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
            {renderCommentList(props.comments)}
            <Form>
              <Form.Field>
                <Input
                  placeholder='comment...'
                  action='Comment'
                />
              </Form.Field>
            </Form>
        </Item.Content>
      </Item>
  )
}

const mapStateToProps = state => {
  return {
    userComments: state.auth.userComments
  }
}

export default connect(mapStateToProps)(Grievance)
