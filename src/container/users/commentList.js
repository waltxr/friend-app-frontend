import React, { Component } from 'react'
import ItemComment from './comment'
import { Item, Comment, Button } from 'semantic-ui-react'
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
    if (!this.state.showMore || commentList.length === 0) {
      console.log(commentList.length === 0);
      return null
    } else {
      console.log(commentList.length === 0);
      return <Button onClick={this.showMore} size='mini'>Show More...</Button>
    }
  }

  render() {
    const commentList = Object.keys(this.props.comments)
    .map(key => this.props.comments[key])
    .filter(comment => comment.commentable_id === this.props.item_id)
    .slice(0,this.state.limit)
    .map(comment => <ItemComment key={comment.id} id={comment.id} body={comment.body} user={comment.user}/>)

    return (
      <Comment.Group>
        { commentList }
        {this.renderShowMore(commentList)}
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
