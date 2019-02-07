interface ToggleProps {
  render: (options: { on: boolean; toggle: () => any }) => React.ReactNode
}

interface ToggleState {
  on: boolean
}

export { ToggleProps, ToggleState }
