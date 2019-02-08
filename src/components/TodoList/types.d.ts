interface TodoProps {
  text: string
  isCompleted: boolean
}

interface TodoListProps {
  initialTodoItems: {
    text: string
    id: string
    isCompleted: boolean
  }[]
}

export { TodoProps, TodoListProps }
