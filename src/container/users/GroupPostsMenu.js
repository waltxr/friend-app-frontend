import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import GroupGrievanceList from './GroupGrievanceList'

export default class GroupPostsMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Container>
        <Menu>
          <Menu.Item
            name='grievances'
            active={activeItem === 'grievances'}
            content='Grievances'
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='validPoints'
            active={activeItem === 'validPoints'}
            content='Valid Points'
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='proclamations'
            active={activeItem === 'proclamations'}
            content='Proclamations'
            onClick={this.handleItemClick}
          />
        </Menu>
          { this.state.activeItem === 'grievances' ? <GroupGrievanceList /> : null }
      </Container>
    )
  }
}
