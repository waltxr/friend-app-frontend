import React from 'react'
import Receiver from './receiver'
import { Item } from 'semantic-ui-react'

const ReceiverList = (props) => {
  const receivers = props.receivers
  .map((receiver) => <Receiver key={receiver.id} id={receiver.id} name={receiver.name}/>)
  return (
    <Item.Extra>
      {receivers}
    </Item.Extra>
  )
}

export default ReceiverList
