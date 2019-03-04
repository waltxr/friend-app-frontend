import React from 'react'
import Grievance from './Grievance'
import { Item } from 'semantic-ui-react'

const GrievanceList = (props) => {
  const filedGrievances = props.user.filed_grievances
  .map((grievance) => <Grievance key={grievance.id} id={grievance.id} title={grievance.title} description={grievance.description} receivers={grievance.receivers}/>)
  return (
    <Item.Group>
      {filedGrievances}
    </Item.Group>
  )
}

export default GrievanceList
