import React, { Component } from 'react'

import Toggle from '../../components/ToggleRPC'

import { AppProps, AppState } from './types'

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, toggle }: { on: boolean; toggle: () => any }) => (
            <React.Fragment>
              {on && <h1>Show Me</h1>}
              <button onClick={toggle}>Show/Hide</button>
            </React.Fragment>
          )}
        </Toggle>
      </div>
    )
  }
}

export default App
