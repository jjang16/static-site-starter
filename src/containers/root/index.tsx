import React from 'react'

export const Root = ({ children }: { children: React.ReactNode }) => {
  return children
}

export const wrapPageElement = ({
  element,
  props,
}: {
  element: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  props: {
    location: Location
  }
  // props : gatsby page props
}) => {
  return <Root>{element}</Root>
}

export const wrapRootElement = ({
  element,
}: {
  element: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}) => {
  return element
}
