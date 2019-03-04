import React from 'react'
import Grievance from './Grievance'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const GrievanceList = (props) => {  
  const filedGrievances = props.user.filed_grievances
  .map((grievance) => <Grievance key={grievance.id} id={grievance.id} title={grievance.title} description={grievance.description} receivers={grievance.receivers}/>)
  return (
    <Item.Group>
      {filedGrievances}
    </Item.Group>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.auth.currentUser
//   }
// }

// export default connect(mapStateToProps)(GrievanceList)
export default GrievanceList
