import React, { Component } from 'react'
import ItemComment from './comment'
import { Item, Comment } from 'semantic-ui-react'
import { connect } from 'react-redux'


class CommentList extends Component {

  // .map(comment => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user}/>)

  // renderComments = (commentList) => {
  //   if (commentList.length() > 0) {
  //     debugger
  //     return commentList.map(comment => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user}/>)
  //   } else {
  //     debugger
  //     return null
  //   }
  // }

  render() {

    const commentList = Object.keys(this.props.comments)
    .map(key => this.props.comments[key])
    .filter(comment => comment.commentable_id === this.props.item_id)
    .map(comment => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user}/>)

    return (
      <Comment.Group>
        { commentList }
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
