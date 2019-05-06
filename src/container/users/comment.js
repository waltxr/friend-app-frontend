import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import image from '../../images/image.png'
import CommentList from './commentList'
import CommentForm from './commentForm'



class ItemComment extends Component {

  constructor(props){
    super(props)
      this.state = {
        showReplyForm: false
    }
  }

  handleReplyForm = () => {
    this.setState({
      showReplyForm: true
    })
  }

  renderReplyForm = () => {
    if (!this.state.showReplyForm) {
      return null
    } else {
      return <CommentForm grievance={this.props}/>
    }
  }


  render() {
    return (
      <Comment>
        <Comment.Content>
          <Comment.Author as='a'>{this.props.user.name}</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>{this.props.body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action onClick={this.handleReplyForm}>Reply</Comment.Action>
          </Comment.Actions>
          {this.renderReplyForm()}
          <CommentList item_id={this.props.id}/>
        </Comment.Content>
      </Comment>
    )
  }
}

export default ItemComment
