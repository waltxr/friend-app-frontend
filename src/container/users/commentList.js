import React, { Component } from 'react'
import ItemComment from './comment'
import { Item, Comment, Button, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'


class CommentList extends Component {

  constructor(props){
    super(props)
      this.state = {
        limit: 3,
        showMore: true
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

  render() {
    const commentList = Object.keys(this.props.comments)
    .map(key => this.props.comments[key])
    .filter(comment => comment.commentable_id === this.props.item_id)
    console.log(this.props.comments);
    const renderedList = commentList
    .slice(0,this.state.limit)
    .map(comment => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user}/>)

    return (
      <Comment.Group threaded>
        { renderedList }
        { this.renderShowMore(commentList) }
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
