import React, { Component } from 'react'

import Toggle from '../../components/ToggleRPC'
import Title from '../../components/Title'
import Button from '../../components/Button'

import { AppProps, AppState } from './types'

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Toggle>
          {({ on, toggle }: { on: boolean; toggle: () => any }) => (
            <React.Fragment>
              <Title heading="Render Props" subHeading="React" on={on} />
              <Button onClick={toggle} label="Show/hide" />
            </React.Fragment>
          )}
        </Toggle>
      </div>
    )
  }
}

export default App
