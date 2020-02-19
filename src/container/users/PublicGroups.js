import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List, Container, Header } from 'semantic-ui-react'
import GroupListItem from './GroupListItem'

class PublicGroups extends Component {

  render() {    
    const groups = this.props.groups
    .map( group => <GroupListItem group={group} key= {group.id} /> )

    return(
      <Container style={{marginTop: '3em'}}>
        <Header>Join Groups</Header>
        <List animated verticalAlign='middle'>
          {groups}
        </List>
      </Container>
    )
  }

}


const mapStateToProps = state => {
  return {
    groups: state.app.groups
  }
}

export default PublicGroups = withRouter(connect(mapStateToProps, {})(PublicGroups))
