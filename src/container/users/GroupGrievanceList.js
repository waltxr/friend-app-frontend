import React, { Component } from 'react'
import Grievance from './Grievance'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

class GroupGrievanceList extends Component {
  render() {
    console.log(this.props);
    const grievances = this.props.currentGroup.grievances
    .map(grievance => <Grievance key={grievance.id} id={grievance.id} title={grievance.title} description={grievance.description} receivers={grievance.receivers} reporter={grievance.reporter} comments={grievance.comments}/>)
    return(
      <Item.Group>
        {grievances}
      </Item.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentGroup: state.app.currentGroup
  }
}

export default connect(mapStateToProps)(GroupGrievanceList)
