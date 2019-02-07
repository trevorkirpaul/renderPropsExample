interface configTypes {
  /**
   * `on` is a boolean value which is toggled
   * by `toggle`
   */
  on: boolean
  /**
   * `toggle` will flip the value for
   * `on`
   */
  toggle: () => any
}

interface ToggleRPCProps {
  children: (config: configTypes) => React.ReactNode
}

interface ToggleRPCState {
  on: boolean
}

export { ToggleRPCProps, ToggleRPCState }
