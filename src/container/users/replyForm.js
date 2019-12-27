import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { postReplyComment } from '../../actions/appActions'

class ReplyForm extends Component {
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
    // this.props.postReplyComment(this.state, this.props.comment)
    this.props.postReplyComment(this.state, this.props.comment)
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
            placeholder='Reply...'
            action='Comment'
            onChange={this.handleChange}
            value={this.state.body}
          />
        </Form.Field>
      </Form>
    )
  }

}

export default connect(null, { })(ReplyForm)
