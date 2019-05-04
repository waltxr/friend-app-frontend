import React from 'react'
import ItemComment from './comment'
import { Item, Comment } from 'semantic-ui-react'

const CommentList = (props) => {
  const comments = props.comments
  .map((comment) => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user}/>)
  return (
    <Comment.Group>
      {comments}
    </Comment.Group>
  )
}


export default CommentList
