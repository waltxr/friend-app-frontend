import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import CommentList from './commentList'
import ReplyForm from './replyForm'
import avatar from '../../images/avatar.jpg'
import { connect } from 'react-redux'


class ItemComment extends Component {

  constructor(props){
    super(props)
      this.state = {
        showReplyForm: false,
        showReplyButton: Object.keys(props.comments).map(key => props.comments[key]).filter(comment => comment.commentable_id === props.id).length === 0,
        showShowRepliesButton: Object.keys(props.comments).map(key => props.comments[key]).filter(comment => comment.commentable_id === props.id).length > 0,
        numOfComments: Object.keys(props.comments).map(key => props.comments[key]).filter(comment => comment.commentable_id === props.id).length
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
      showShowRepliesButton: false,
      showReplyButton: true
    })
  }

  handleShowReplyButton = () => {
    this.setState({
      showReplyButton: true
    })
  }


  render() {
    const replyButton = (
      <Comment.Action onClick={this.handleReplyForm}>Reply</Comment.Action>
    )

    const showRepliesButton = (
      <Comment.Action onClick={this.handleShowShowRepliesButton} size='mini'>See ({this.state.numOfComments}) {this.state.numOfComments === 1 ? "reply" : "replies"}</Comment.Action>
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
            { this.state.showReplyButton  ? replyButton  : showRepliesButton}
          </Comment.Actions>
          {this.renderReplyForm()}
        </Comment.Content>
        { this.state.showShowRepliesButton ? null : commentList }
      </Comment>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.app.userComments
  }
}

export default connect(mapStateToProps)(ItemComment)
