import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import CommentList from './commentList'
import ReplyForm from './replyForm'
import avatar from '../../images/avatar.jpg'

//// TODO:
// a lot of what's happening in commentList needs to be in here
// filter if item_id has any comments before rendering comment list,
// then send number of comments, and render that with show replies instead of reply
// like in instagram

class ItemComment extends Component {

  constructor(props){
    console.log(props.showReplyButton);
    super(props)
      this.state = {
        showReplyForm: false,
        showReplyButton: !props.isCommentList,
        showShowRepliesButton: props.isCommentList,
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
      return <ReplyForm comment={this.props}/>
    }
  }


  handleShowShowRepliesButton = () => {
    this.setState({
      ...this.state,
      showShowRepliesButton: false,
      showReplyButton: true
    })
  }

  handleShowReplyButton = () => {
    this.setState({
      ...this.state,
      showReplyButton: true
    })
  }


  render() {
    console.log(this.props);
    const replyButton = (
      <Comment.Action onClick={this.handleReplyForm}>Reply</Comment.Action>
    )

    const showRepliesButton = (
      <Button bassic onClick={this.handleShowShowRepliesButton} size='mini'>View replies...</Button>
    )

    const commentList = (
      <CommentList item_id={this.props.id} isCommentList={true} />
    )

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
            { this.state.showReplyButton ? replyButton : showRepliesButton }
          </Comment.Actions>
          {this.renderReplyForm()}
        </Comment.Content>
        { this.state.showShowRepliesButton ? null : commentList }
      </Comment>
    )
  }
}

export default ItemComment
