import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Bar from '../components/bar'
import Viewport from '../components/viewport'
import Login from '../components/login'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const title = data.site.siteMetadata.title
  return (
    <main>
      <Viewport title={title}/>
      <Bar title={title}/>
      <Login/>
    </main>
  )
}

export default IndexPage
