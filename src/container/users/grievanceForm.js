import React, { Component } from 'react'
import { Form, Header, Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fileGrievance } from '../../actions/appActions'
import _ from 'lodash'
import faker from 'faker'

class GrievanceForm extends Component {
  constructor(props){
    super(props)
      this.state = {
        title: "",
        description: "",
        receiver_ids: []
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
    this.props.fileGrievance(this.state)
    this.setState({
      title: "",
      description: "",
      receiver_ids: []
    })
  }

  handleUserChange = (e, selected) => {
    const {name, value} = selected
    this.setState({
      [name]: value
    })
  }

  render() {
    const userOptions = this.props.users.map( user => {
      return {
        key: user.id,
        text: user.name,
        value: user.id
      }
    })

    return (
      <Form onSubmit={this.handleSubmit}>
        <span>File a Grievance:</span>
        <Form.Field>
          <Form.Dropdown placeholder='Receiver' fluid multiple search selection options={userOptions} label='Receiver' onChange={this.handleUserChange} name='receiver_ids' placeholder='Receiver' value={this.state.receiver_ids} />
        </Form.Field>
        <Form.Field>
          <Form.Input fluid label='Title' placeholder='Title' name='title' onChange={this.handleChange} value={this.state.title}/>
        </Form.Field>
        <Form.Field>
          <Form.TextArea label='Description' name='description' placeholder='Describe the grievance you have...'  value={this.state.description} onChange={this.handleChange}/>
        </Form.Field>
          <Form.Button>File</Form.Button>
      </Form>
    )
  }
}

export default connect(null, { fileGrievance })(GrievanceForm)
