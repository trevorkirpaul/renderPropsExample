import React, { useState } from 'react'
import uuid from 'uuid/v4'

import TodoForm from '../TodoForm'
import Todo from './Todo'
import { TodoListProps } from './types'

const TodoList = (props: TodoListProps) => {
  const [todos, setTodos] = useState(props.initialTodoItems)

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuid(),
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div>
      {todos.map(todo => (
        <Todo key={todo.id} text={todo.text} isCompleted={todo.isCompleted} />
      ))}

      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default TodoList
