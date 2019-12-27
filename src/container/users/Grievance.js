import React, { Component } from 'react'
import { Item } from 'semantic-ui-react'
import ReceiverList from './receiverList'
import CommentList from './commentList'
import { connect } from 'react-redux'
import CommentForm from './commentForm'
import { API_URL } from '../../actions/apiUrl'




class Grievance extends Component {

  constructor(props){
    super(props)
      this.state = {
        commentList: props.comments
    }
  }

  postGrievanceComment = (comment, grievance) => {
    fetch(`${API_URL}/grievances/${grievance.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.token}`,
      },
      body: JSON.stringify({comment: comment})
    })
    .then(response => response.json())
    .then(comment => {
      this.setState({
        commentList: [...this.state.commentList, comment]
      })
    })
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    
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
          <CommentList item_id={this.props.id} isCommentList={false} comments={this.state.commentList} />
          <CommentForm grievance={this.props} postGrievanceComment={this.postGrievanceComment}/>
        </div>
    )
  }
}

export default connect(null)(Grievance)
