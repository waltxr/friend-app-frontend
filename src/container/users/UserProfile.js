import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import GrievanceList from './grievanceList'
import SideMenu from '../sideMenu'
import GrievanceForm from './grievanceForm'
import { getUsers } from '../../actions/userActions'


class UserProfile extends Component {

  componentWillMount() {
    this.props.getUsers()
  }

  componentDidMount() {
    const {user, history} = this.props
    history.push(user.name.toLowerCase()+'-'+user.id)
  }

  render() {
    const createdGrievances = (
      <GrievanceList user={this.props.user} grievances={this.props.created_grievances}/>
    )
    console.log(this.props);
    return(
      <Container text style={{ marginTop: '7em' }}>
        {this.props.user.name}
        <GrievanceForm users={this.props.users} />
        {this.props.created_grievances.length > 0 ? createdGrievances : <div />}
        <GrievanceList user={this.props.user} grievances={this.props.filed_grievances}/>
      </Container>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users.list,
    created_grievances: state.created_grievances
  }
}

export default UserProfile = withRouter(connect(mapStateToProps, {getUsers})(UserProfile))
