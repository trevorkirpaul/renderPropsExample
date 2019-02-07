import React from 'react'

import { ToggleRPCProps, ToggleRPCState } from './types'

class Toggle extends React.Component<ToggleRPCProps, ToggleRPCState> {
  constructor(props: ToggleRPCProps) {
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
    const { children } = this.props

    return children({
      on: this.state.on,
      toggle: this.toggle,
    })
  }
}

export default Toggle
