import React, { Component } from 'react'
import Grievance from './Grievance'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'


class GrievanceList extends Component {

render() {
    let grievancesList    
    if (this.props.type=='filed_grievances') {
      grievancesList = Object.keys(this.props.filed_grievances)
      .map((key) => this.props.filed_grievances[key])
    } else if (this.props.type=='received_grievances') {      
      grievancesList = Object.keys(this.props.received_grievances)
      .map((key) => this.props.received_grievances[key])
    }  
    
    const grievances = grievancesList.reverse()
    .map((grievance) => <Grievance key={grievance.id} id={grievance.id} title={grievance.title} description={grievance.description} receivers={grievance.receivers}/>)
    return (
      <Item.Group>
        {grievances}
      </Item.Group>
    )
  }

}

const mapStateToProps = state => {  
  return {
    filed_grievances: state.app.userFiledGrievances,
    received_grievances: state.app.userReceivedGrievances
  }
}

export default connect(mapStateToProps)(GrievanceList)
