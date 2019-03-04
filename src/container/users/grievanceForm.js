import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class GrievanceForm extends Component {

  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    console.log(this.props);
    const { value } = this.state
    console.log(value);
    return (
      <Form>
        <span>File a Grievance:</span>
        <Form.Group widths='equal'>
          <Form.Select fluid label='Receiver' placeholder='Receiver' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Input fluid label='Title' placeholder='Title'  onChange={this.handleChange}/>
        <Form.TextArea label='Description' placeholder='Describe the grievance you have...'  onChange={this.handleChange}/>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default GrievanceForm
