import React, {Component} from 'react';
import { List } from 'semantic-ui-react'


class GroupListItem extends Component {
  render() {
    const group = this.props.group 
    return(
      <List.Item>
        <List.Header>{group.name}</List.Header>
      </List.Item>
    )
  }
}

export default GroupListItem
