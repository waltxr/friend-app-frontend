import React, { Component } from 'react'
import { Comment } from 'semantic-ui-react'
import CommentList from './commentList'
import ReplyForm from './replyForm'
import avatar from '../../images/avatar.jpg'
import { connect } from 'react-redux'
import { API_URL } from '../../actions/apiUrl'


class ItemComment extends Component {

  constructor(props){
    super(props)
      this.state = {
        showReplyForm: false,
        showReplyButton: props.comments.length === 0,
        showShowRepliesButton: props.comments.length > 0,
        numOfComments: props.comments.length,
        commentList: props.comments
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
      return <ReplyForm comment={this.props} postReplyComment={this.postReplyComment}/>
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

  postReplyComment = (comment, replyingTo) => {
    fetch(`${API_URL}/comments/${replyingTo.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({comment: comment})
    })
    .then(response => response.json())
    .then(comment => {
      console.log(comment);
      this.setState({
        ...this.state,
        commentList: [...this.state.commentList, comment]
      })
    })
  }


  render() {
    console.log(this.state);
    console.log(this.props);    
    const replyButton = (
      <Comment.Action onClick={this.handleReplyForm}>Reply</Comment.Action>
    )

    const showRepliesButton = (
      <Comment.Action onClick={this.handleShowShowRepliesButton} size='mini'>See ({this.state.numOfComments}) {this.state.numOfComments === 1 ? "reply" : "replies"}</Comment.Action>
    )

    // const commentList = (
    //   <CommentList item_id={this.props.id} isCommentList={true} comments={this.state.commentList}/>
    // )

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
        { this.state.showShowRepliesButton ? null : <CommentList item_id={this.props.id} isCommentList={true} comments={this.state.commentList}/> }
      </Comment>
    )
  }
}

export default connect(null)(ItemComment)
