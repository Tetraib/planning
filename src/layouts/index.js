import React from 'react'
import Container from '@material-ui/core/Container'
import BottomNav from '../components/bottomNav'
import { makeStyles } from '@material-ui/core/styles'
import Bar from '../components/bar'
import Viewport from '../components/viewport'
import { useStaticQuery, graphql } from 'gatsby'

const useStyles = makeStyles({
  paper: {
    paddingBottom: 56,
  },
})

const Layout = ({ children, location }) => {
  const classes = useStyles()
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
    <div>
      <Viewport title={title} />
      <Bar title={title} />
      <Container disableGutters className={classes.paper} maxWidth='md'>
        {children}
      </Container>
      <BottomNav location={location} />
    </div>
  )
}
export default Layout
