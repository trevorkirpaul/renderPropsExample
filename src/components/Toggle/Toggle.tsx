import React from 'react'

import { ToggleProps, ToggleState } from './types'

class Toggle extends React.Component<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props)

    this.state = {
      on: false,
    }
  }

  toggle = () => {
    return this.setState({
      on: !this.state.on,
    })
  }

  render() {
    const { render } = this.props

    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    )
  }
}

export default Toggle
