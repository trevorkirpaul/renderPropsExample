import React, { useState } from 'react'

import { TodoFormProps } from './types'

const TodoForm = (props: TodoFormProps) => {
  const [value, setValue] = useState('')

  const handleSubmit = () => {
    if (!value) {
      return null
    }

    return props.addTodo(value)
  }

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.currentTarget.value)
        }
      />

      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TodoForm
