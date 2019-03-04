import React from 'react'
import { Item, Label } from 'semantic-ui-react'

const Receiver = (props) => {
  console.log(props);
  return (
      <Label>{props.name}</Label>
  )
}

export default Receiver
