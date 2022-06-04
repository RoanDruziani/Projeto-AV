import React from 'react'
import {Button} from "react-bootstrap"

export default function Bootstrapbutton(props) {
  return (
    <div>
      <Button 
      type={props.type} onClick={props.onClick} text={props.text}>
        {props.text}
      </Button>
    </div>
  )
}
