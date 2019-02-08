import React from 'react'

import { TodoProps } from './types'
import { TodoWrapper } from './styles'

const Todo = (props: TodoProps) => (
  <TodoWrapper>
    <h2>{props.text}</h2>
    <p>status: {props.isCompleted ? 'Complete' : 'WIP'}</p>
  </TodoWrapper>
)

export default Todo
