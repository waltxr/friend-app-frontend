import React, {Component} from 'react';
import { List, Image } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setGroup } from '../../actions/appActions'
import { connect } from 'react-redux';


class GroupListItem extends Component {  
  
  selectGroup = () => {
    this.props.setGroup(this.props.group)
  }
  
  render() {
    const group = this.props.group
        
    return(
      <List.Item onClick={this.selectGroup}>
        <Image avatar src={group.avatar} />
        <List.Content>
          <List.Header>{group.name}</List.Header>
          {group.description}
        </List.Content>        
      </List.Item>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentGroup: state.app.currentGroup
  }
}

export default GroupListItem = withRouter(connect(mapStateToProps, {setGroup})(GroupListItem))
