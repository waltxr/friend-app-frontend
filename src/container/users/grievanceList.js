import React from 'react'
import Grievance from './Grievance'
import { Item } from 'semantic-ui-react'

const GrievanceList = (props) => {
  const grievances = props.grievances.reverse()
  .map((grievance) => <Grievance key={grievance.id} id={grievance.id} title={grievance.title} description={grievance.description} receivers={grievance.receivers} comments={grievance.comments}/>)
  return (
    <Item.Group>
      {grievances}
    </Item.Group>
  )
}

export default GrievanceList
