import React, { Component } from 'react';
import { Button, Form, Container, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createGroup } from '../actions/appActions';


class CreateGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createGroup(this.state)
  }

  render() {
    return(
      <Container style={{ marginTop: '7em' }}>
        <Header as='h3'>Create Friend Group</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Group Name:</label>
            <input
              placeholder='Group name...'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default CreateGroup = withRouter(connect(null, {createGroup})(CreateGroup))
