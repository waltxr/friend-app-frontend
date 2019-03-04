import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fileGrievance } from '../../actions/userActions'

class GrievanceForm extends Component {
  constructor(props){
    super(props)
      this.state = {
        receiver: {},
        title: "",
        description: ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    debugger
  }

  options = (users) => {
    if (users.length === 0)
      return [{key: 0, text: '-', value: '-'}]
    else {
      let opts = []
      users.forEach((user) => {
        opts.push({ key: user.id, text: user.name, value: user.id })
      })
      return opts
    }
  }

  render() {
    console.log(this.props);
    console.log(this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <span>File a Grievance:</span>
        <Form.Group widths='equal'>
          <Form.Select fluid onChange={this.handleChange} label='Receiver' name='receiver' placeholder='Receiver' value={this.state.receiver} options={this.options(this.props.users.users)} onChange={this.handleChange} />
        </Form.Group>
        <Form.Input fluid label='Title' placeholder='Title' name='title' onChange={this.handleChange} value={this.state.title}/>
        <Form.TextArea label='Description' name='description' placeholder='Describe the grievance you have...'  value={this.state.description} onChange={this.handleChange}/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default connect(null, { fileGrievance })(GrievanceForm)
