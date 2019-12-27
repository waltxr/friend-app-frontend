import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class GroupPage extends Component {

  render() {
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
