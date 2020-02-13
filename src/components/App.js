import React, { Component } from 'react';
import Login from '../container/Login';
import Signup from '../container/SignUp';
import UserProfile from '../container/users/UserProfile';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.css';
import Navigation from '../routes/Navigation';
import CreateGroup from '../container/createGroup'
import HomepageLayout from './Homepage'

class App extends Component {
  render() {
    const {isAuthenticated, user} = this.props
// <Navigation isAuthenticated={isAuthenticated} />
    const guestViews = (
      <div id="landing-page" className="wrapper">
        <Route exact path='/' component={HomepageLayout} />
        <Route exact path="/login" component={Login}  />
        <Route exact path="/signup" component={Signup} />
      </div>
    )



    const userViews = (
      <div className="wrapper">
        <Navigation isAuthenticated={isAuthenticated} user={user} />
        <Route render={() => <UserProfile  />} />
      </div>
    )

    return (
      <Router>
       {isAuthenticated ? userViews : guestViews}
     </Router>
    )
  }
}

//   render() {
//     return(
//       <div>
//         <Router>
//           <HomepageLayout />
//         </Router>
//       </div>
//     )
//   }
// }

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.app.isAuthenticated,
    user: state.app.currentUser,
    created_grievances: state.created_grievances,
  }
}

export default App = connect(mapStateToProps, {})(App);
