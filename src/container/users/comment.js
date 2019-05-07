import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import CommentList from './commentList'
import CommentForm from './commentForm'
import avatar from '../../images/avatar.jpg'



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
        <Comment.Avatar as='a' src={avatar} />
        <Comment.Content>
          <Comment.Author as='a'>{this.props.user.name}</Comment.Author>
          <Comment.Metadata>
            <span>Today at 5:42PM</span>
          </Comment.Metadata>
          <Comment.Text>{this.props.body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action onClick={this.handleReplyForm}>Reply</Comment.Action>
          </Comment.Actions>
          {this.renderReplyForm()}
        </Comment.Content>
        <CommentList item_id={this.props.id}/>
      </Comment>
    )
  }
}

export default ItemComment
