import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import CommentList from './commentList'
import { connect } from 'react-redux'
import CommentForm from './commentForm'




class Grievance extends Component {

  render() {
    return (
        <div>
          <Item>
            <Item.Content>
              <span className='cinema'>Grievance</span>
              <Item.Header>{this.props.title}</Item.Header>
              <Item.Meta>
              </Item.Meta>
              <Item.Description>{this.props.description}</Item.Description>
              <span>Filed by: {this.props.reporter.name}</span>
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
