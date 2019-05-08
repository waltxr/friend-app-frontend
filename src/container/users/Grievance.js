import React, { Component } from 'react'
import { Image, Item, Label, Button, Comment, Form, Container, Input } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import image from '../../images/image.png'
import CommentList from './commentList'
import { connect } from 'react-redux'
import filter from 'lodash/filter'
import CommentForm from './commentForm'




class Grievance extends Component {

  render() {
    return (
        <div>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{this.props.title}</Item.Header>
              <Item.Meta>
                <span className='cinema'>Grievance</span>
              </Item.Meta>
              <Item.Description>{this.props.description}</Item.Description>
                <ReceiverList receivers={this.props.receivers} />
              </Item.Content>
          </Item>
          <CommentList item_id={this.props.id} isCommentList={false}/>
          <CommentForm grievance={this.props}/>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.app.userComments
  }
}

export default connect(mapStateToProps)(Grievance)
