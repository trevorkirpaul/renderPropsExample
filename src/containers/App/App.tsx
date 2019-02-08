import React, { Component } from 'react'
import uuid from 'uuid/v4'

import Toggle from '../../components/ToggleRPC'
import Title from '../../components/Title'
import Button from '../../components/Button'
import TodoList from '../../components/TodoList'

import { AppProps, AppState } from './types'

const initialTodoItems = [
  {
    text: 'Learn about React Hooks',
    isCompleted: false,
    id: uuid(),
  },
  {
    text: 'Learn about Webpack config',
    isCompleted: false,
    id: uuid(),
  },
]

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <h1>Hooks Example</h1>
        <TodoList initialTodoItems={initialTodoItems} />
        <h1>Toggle Example</h1>
        <Toggle>
          {({ on, toggle }: { on: boolean; toggle: () => any }) => (
            <React.Fragment>
              <Title
                heading="Rendered"
                subHeading="This is the rendered object"
                on={on}
              />
              <Button onClick={toggle} label="Show/hide" />
            </React.Fragment>
          )}
        </Toggle>
      </div>
    )
  }
}

export default App
