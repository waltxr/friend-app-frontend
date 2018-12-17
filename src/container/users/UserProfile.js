import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: this.props.user,
    }
  }

  render() {
    return(
      <div>
        <p>in user profile</p>
      </div>
    )
  }
}

  const mapStatesToProps = (state) => {
    return {
      users: state.users
    }
  }


export default UserProfile = connect(mapStatesToProps, {})(UserProfile);
