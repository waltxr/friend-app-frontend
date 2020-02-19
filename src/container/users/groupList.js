import React, { Component } from 'react'
import GroupCard from './groupCard'
import { Card, Header, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

class GroupList extends Component {

  render() {    
    const groups = this.props.groups
    .map( group => <GroupCard group={group} key={group.id}/>)

    return(
      
      <Container> 
        <Header>Your Groups</Header>
        <Card.Group>              
          {groups}
        </Card.Group>
      </Container>
    )
  }
}

export default GroupList
