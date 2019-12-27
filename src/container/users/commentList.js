import React, { Component } from 'react'
import ItemComment from './comment'
import { Comment, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'



class CommentList extends Component {

  constructor(props){
    super(props)
      this.state = {
        limit: 3,
        showMore: true,
        isCommentList: props.isCommentList,
        commentList: props.comments
    }
  }

  componentWillReceiveProps(props) {    
    this.setState({
      ...this.state,
      commentList: props.comments
    })
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
      return <Button onClick={this.showMore} size='mini'>Show More...</Button>
    }
  }

  handleShowReplies = () => {
    this.setState({
      isCommentList: false,
      showReplyButton: true
    })
  }

  updateCommentList = () => {
    this.setState({

    })
  }

  // postReplyComment = (comment, replyingTo) => {
  //   fetch(`${API_URL}/comments/${replyingTo.id}/comments`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Bearer ${localStorage.token}`,
  //     },
  //     body: JSON.stringify({comment: comment})
  //   })
  //   .then(response => response.json())
  //   .then(comment => {
  //     console.log(comment);
  //     this.setState({
  //       ...this.state,
  //       commentList: [...this.state.commentList, comment]
  //     })
  //     debugger
  //   })
  // }

  render() {
    console.log(this.state);
    const renderedList = this.state.commentList
    .slice(0,this.state.limit)
    .map(comment => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user} isCommentList={this.props.isCommentList} comments={comment.comments} />)

    return (
      <Comment.Group threaded>
        { renderedList }
        { this.renderShowMore(this.state.commentList) }
      </Comment.Group>
    )

  }
}


export default connect(null)(CommentList)
