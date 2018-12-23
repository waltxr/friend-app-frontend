import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user: this.props.user,
  //   }
  // }

  render() {
    console.log(this.props);
    console.log('in user Profile');
    return(
      <div>
        <p>{this.props.user.name}</p>
      </div>
    )
  }
  
}

  // const mapStatesToProps = (state) => {
  //   return {
  //     users: state.users
  //   }
  // }


export default UserProfile = connect(null, {})(UserProfile);
