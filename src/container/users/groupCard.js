import React, {Component} from 'react';
import { Card, Icon } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom";
import UserProfile from './UserProfile'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GroupPage from './GroupPage'
import { setGroup } from '../../actions/appActions'
import { connect } from 'react-redux';


class GroupCard extends Component {

  selectGroup = () => {    
    this.props.setGroup(this.props.group)
  }

  render() {
    console.log(this.props);
    const groupName = this.props.group.name

    return(
      <Card onClick={this.selectGroup}>
        <Card.Content header={groupName}/>
        <Card.Content extra>
          <Icon name='user' />
          {this.props.group.members.length} Members
        </Card.Content>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentGroup: state.app.currentGroup
  }
}

export default GroupCard = withRouter(connect(mapStateToProps, {setGroup})(GroupCard))
