import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { List, Container, Header, Search, Grid } from 'semantic-ui-react'
import GroupListItem from './GroupListItem'
import { API_URL } from '../../actions/apiUrl'
import { setGroup } from '../../actions/appActions'



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

  handleResultSelect = (e, {result}) => {
    let group = this.state.results.find(g => g.id = result.id)    
    this.props.setGroup(group)
  }

  render() {
    const { isLoading, value, results } = this.state

    const groups = this.props.groups
    .map( group => <GroupListItem group={group} key= {group.id} /> )

    let resultsArray = results.map(element => {
      return { title: element.name, description: element.description, image: element.avatar, id: element.id }
    })

    return(
      <Container style={{marginTop: '3em'}}>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header>Discover Groups</Header>
              <List animated verticalAlign='middle'>
                {groups}
              </List>
            </Grid.Column>
            <Grid.Column>
              <Search
                onSearchChange={this.handleSearchChange}
                loading={isLoading}
                results={resultsArray}
                value={value}
                onResultSelect={this.handleResultSelect}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}


const mapStateToProps = state => {
  return {
    groups: state.app.groups
  }
}

export default PublicGroups = withRouter(connect(mapStateToProps, {setGroup})(PublicGroups))
