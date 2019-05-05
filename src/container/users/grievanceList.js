import React, { Component } from 'react'
import Grievance from './Grievance'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'


class GrievanceList extends Component {



render() {
    const grievancesList = Object.keys(this.props.grievances)
    .map((key) => this.props.grievances[key])

    const grievances = grievancesList
    .map((grievance) => <Grievance key={grievance.id} id={grievance.id} title={grievance.title} description={grievance.description} receivers={grievance.receivers} comments={grievance.comments}/>)
    return (
      <Item.Group>
        {grievances}
      </Item.Group>
    )
  }

}

const mapStateToProps = state => {  
  return {
    grievances: state.auth.userGrievances
  }
}

export default connect(mapStateToProps)(GrievanceList)
