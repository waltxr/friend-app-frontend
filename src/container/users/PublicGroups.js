import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List, Container, Header, Search } from 'semantic-ui-react'
import GroupListItem from './GroupListItem'

const initialState = groups =>  {
  return {
    isLoading: false,
    results: groups,
    value: ''
  }
}

class PublicGroups extends Component {
  state = initialState(this.props.groups)

  render() {
    const groups = this.state.results
    .map( group => <GroupListItem group={group} key= {group.id} /> )

    return(
      <Container style={{marginTop: '3em'}}>
        <Header>Join Groups</Header>
          <Search>
          </Search>
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
