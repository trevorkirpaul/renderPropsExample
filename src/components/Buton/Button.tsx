import React from 'react'

import { ButtonProps } from './types'

const Button = (props: ButtonProps) => (
  <button onClick={props.onClick}>{props.label}</button>
)

export default Button
