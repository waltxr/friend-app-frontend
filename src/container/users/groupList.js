import React, { Component } from 'react'
import GroupCard from './groupCard'
import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'

class GroupList extends Component {

  render() {
    const groups = this.props.groups
    .map( group => <GroupCard group={group} key={group.id}/>)

    return(
      <Card.Group centered>
        {groups}
      </Card.Group>
    )
  }
}

export default GroupList
