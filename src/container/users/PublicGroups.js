import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List, Container, Header, Search } from 'semantic-ui-react'
import GroupListItem from './GroupListItem'
import { API_URL } from '../../actions/apiUrl'


const initialState = groups =>  {
  return {
    isLoading: false,
    results: groups,
    value: ''
  }
}

class PublicGroups extends Component {
  state = initialState(this.props.groups)

  handleSearchChange = (e, { value }) => {
    this.setState( {isLoading: true, value} )

    setTimeout(() => {
      fetch((`${API_URL}/groups?filter=${this.state.value}`), {
        method: 'GET',
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.token}`,
        })
      })
      .then(res => res.json())
      .then(filteredGroups => {
        this.setState( {results: filteredGroups, isLoading: false})
      })
    }, 300)
  }

  render() {
    console.log(this.state);
    const { isLoading, value, results } = this.state

    const groups = results
    .map( group => <GroupListItem group={group} key= {group.id} /> )

    return(
      <Container style={{marginTop: '3em'}}>
        <Header>Join Groups</Header>
          <Search
              onSearchChange={this.handleSearchChange}
              loading={isLoading}
              results={results}
              value={value}
              {...this.props}
          />
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
