import React, { Component } from 'react'
import ItemComment from './comment'
import { Item, Comment, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'


class CommentList extends Component {

  constructor(props){
    console.log(props.isCommentList);
    super(props)
      this.state = {
        limit: 3,
        showMore: true,
        isCommentList: props.isCommentList,
        showReplyButton: false
    }
  }

  showMore = (commentList) => {
    this.setState({
      limit: commentList.length,
      showMore: false
    })
  }

  renderShowMore = (commentList) => {
    if (!this.state.showMore || commentList.length <= 3) {
      return null
    } else {
      return <Button bassic onClick={this.showMore} size='mini'>Show More...</Button>
    }
  }

  handleShowReplies = () => {
    this.setState({
      isCommentList: false,
      showReplyButton: true
    })
  }

  render() {
    const commentList = Object.keys(this.props.comments)
    .map(key => this.props.comments[key])
    .filter(comment => comment.commentable_id === this.props.item_id)

    const renderedList = commentList
    .slice(0,this.state.limit)
    .map(comment => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user} showReplyButton={(this.state.showReplyButton)}/>)

    const viewRepliesButton = (
      <Button bassic onClick={this.handleShowReplies} size='mini'>View replies...</Button>
    )

    return (
      <Comment.Group threaded>
        { this.state.isCommentList && commentList.length>0 ? viewRepliesButton : renderedList }
        { this.state.isCommentList && commentList.length>0 ? null : this.renderShowMore(commentList) }
      </Comment.Group>
    )

  }
}

const mapStateToProps = state => {
  return {
    comments: state.app.userComments
  }
}



export default connect(mapStateToProps)(CommentList)
