import React, { Component } from 'react'
import { Form, Search, Grid, Header, Segment, Label } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fileGrievance } from '../../actions/userActions'
import _ from 'lodash'
import faker from 'faker'

class GrievanceForm extends Component {
  constructor(props){
    super(props)
      this.state = {
        title: "",
        description: "",
        receiver_ids: [],
        isLoading: false,
        results: [],
        value: ""
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.name })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()
      console.log(this.state.value);

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.users, isMatch),
      })
    }, 300)
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
  }

  handleUserChange = (e, selected) => {
    console.log(selected.value);
    const {name, value} = selected
    this.setState({
      [name]: [value]
    })
  }

  render() {
    console.log(this.state);
    const userOptions = this.props.users.map( user => {
      return {
        key: user.id,
        text: user.name,
        value: user.id
      }
    })
    console.log(this.state.results);
    const resultRenderer = ({ name }) => <Label content={name} />

    return (
      <div>
        <Grid>
          <Grid.Column width={6}>
            <Search
              loading={this.state.isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
              results={this.state.results}
              value={this.state.value}
              resultRenderer={resultRenderer}
            />
          </Grid.Column>
        </Grid>

        <Form onSubmit={this.handleSubmit}>
          <span>File a Grievance:</span>
          <Form.Group widths='equal'>
            <Form.Select fluid onChange={this.handleUserChange} label='Receiver' name='receiver_ids' placeholder='Receiver' options={userOptions}/>
          </Form.Group>
          <Form.Input fluid label='Title' placeholder='Title' name='title' onChange={this.handleChange} value={this.state.title}/>
          <Form.TextArea label='Description' name='description' placeholder='Describe the grievance you have...'  value={this.state.description} onChange={this.handleChange}/>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, { fileGrievance })(GrievanceForm)
