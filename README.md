# Render Props

I made this repo whiles following a short youtube tutorial as well as to further explore the render props pattern.

```jsx
<Toggle>
  {({ on, toggle }: { on: boolean, toggle: () => any }) => (
    <React.Fragment>
      <Title heading="Render Props" subHeading="React" on={on} />
      <Button onClick={toggle} label="Show/hide" />
    </React.Fragment>
  )}
</Toggle>
```

**Toggle** is a component which uses a render props pattern and `props.children` in order to allow the above usage.

Not only is **Toggle** a component that renders its `children` but it does so through a function.

The source code for **Toggle** will reveal this:

```jsx
render() {
  const { children } = this.props

  return children({
    on: this.state.on,
    toggle: this.toggle,
  })
}
```

I've only included the `render` portion of the class component. It is set up to invoke the `children` prop as a function, as that is what gets passed to it from the **Toggle** code above.

If we look at the object argument being passed to `children`, we'll see 2 values:

- on: `boolean` value, comes from **Toggle** state

- toggle: `class method` which flips the state value for `on`

You can think of `children` as a component since we are passing it the class state and a class method from **Toggle**.

The biggest advantage with this pattern is that, when using **Toggle**, we're only given the values with which we can render whatever we choose. Basically we've created a reusable component that allows each use to completely determine how the values are used.
