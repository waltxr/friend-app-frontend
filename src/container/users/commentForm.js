import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { postGrievanceComment } from '../../actions/appActions'

class CommentForm extends Component {
  constructor(props){
    super(props)
      this.state = {
        body: ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.postGrievanceComment(this.state, this.props.grievance)
    this.setState({
      body: ""
    })
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Input
            name='body'
            placeholder='comment...'
            action='Comment'
            onChange={this.handleChange}
            value={this.state.body}
          />
        </Form.Field>
      </Form>
    )
  }

}

export default connect(null, { })(CommentForm)
