import React from 'react'
import { Helmet } from 'react-helmet'

const Viewport = ({ children, title }) => {

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no' />
      {children}
    </Helmet>
  )
}

export default Viewport
