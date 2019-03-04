import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'


class UserProfile extends Component {

  componentDidMount() {
    const {user, history} = this.props

    history.push(user.name.toLowerCase()+'-'+user.id)
  }

  render() {
    return(
      <Container text style={{ marginTop: '7em' }}>
        {this.props.user.name}
        <GrievanceList user={this.props.user}/>
      </Container>
    )
  }

}

export default UserProfile = withRouter(connect(null, {})(UserProfile))