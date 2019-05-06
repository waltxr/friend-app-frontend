import React, { Component } from 'react'
import { Image, Item, Label, Button, Comment, Form, Container, Input } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import image from '../../images/image.png'
import CommentList from './commentList'
import { connect } from 'react-redux'
import CommentForm from './commentForm'
import filter from 'lodash/filter'




class Grievance extends Component {

  // state = {
  //   comments: this.props.comments
  // }

  // renderCommentList = (comments) => {
  //   let commentList = []
  //
  //   if (comments.length > 0) {
  //     comments.map((comment_id) => {
  //       commentList.push(this.props.userComments[comment_id])
  //     })
  //     return (
  //       <CommentList comments={commentList}/>
  //     )
  //   } else {
  //     return null
  //   }
  // }


  // commentList = this.props.userComments.filter(comment => comment.commentable_id === this.props.id)



  //
  // gatherComments = (nextProps) => {
  //   debugger
  //   this.setState({
  //     comments: nextProps
  //   })
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //   this.gatherComments(nextProps)
  // }

  // commentList = Object.keys(this.props.comments)
  // .map(key => this.props.comments[key])
  // .filter(comment => comment.commentable_id === this.props.id)

  render() {
    return (
        <Item>
          <Item.Image src={image} />
          <Item.Content>
            <Item.Header as='a'>{this.props.title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>Grievance</span>
            </Item.Meta>
            <Item.Description>{this.props.description}</Item.Description>
              <ReceiverList receivers={this.props.receivers} />
              <CommentList item_id={this.props.id}/>
              <CommentForm grievance={this.props}/>
          </Item.Content>
        </Item>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.app.userComments
  }
}

export default connect(mapStateToProps)(Grievance)
