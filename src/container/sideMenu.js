import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default class SideMenu extends Component {

  render() {

    return(
      <Menu vertical>

      <Menu.Item>
        Grievance
        <Menu.Menu>
          <Menu.Item
            name='file'
            onClick={this.handleItemClick}
          >
            File
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item>
        <Icon name='grid layout' />
        Browse
      </Menu.Item>
      <Menu.Item
        name='messages'
      >
        Messages
      </Menu.Item>

      <Dropdown item text='More'>
        <Dropdown.Menu>
          <Dropdown.Item icon='edit' text='Edit Profile' />
          <Dropdown.Item icon='globe' text='Choose Language' />
          <Dropdown.Item icon='settings' text='Account Settings' />
        </Dropdown.Menu>
      </Dropdown>
      </Menu>
    )
  }

}
