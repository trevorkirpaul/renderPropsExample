import React from 'react'

import { TitleProps } from './types'

const Title = (props: TitleProps) => {
  if (props.on) {
    return (
      <React.Fragment>
        <h1>{props.heading}</h1>
        <h2>{props.subHeading}</h2>
      </React.Fragment>
    )
  }
  return null
}

export default Title
