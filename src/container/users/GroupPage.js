import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class GroupPage extends Component {

  render() {
    console.log('in groupPage');
    return(
      <div>
        in GroupPage
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.app.currentUser
  }
}

export default GroupPage = withRouter(connect(mapStateToProps, {}))(GroupPage)
