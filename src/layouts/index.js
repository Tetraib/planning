import React from 'react'
import Container from '@material-ui/core/Container'
import BottomNav from '../components/bottomNav'
import { makeStyles } from '@material-ui/core/styles'
import Bar from '../components/bar'
import Viewport from '../components/viewport'
import { useStaticQuery, graphql } from 'gatsby'
import { useSigninCheck } from 'reactfire'

const useStyles = makeStyles({
  paper: {
    paddingBottom: 56,
  },
})

const Layout = ({ children, location }) => {
  const classes = useStyles()
  const { status, data: signInCheckResult } = useSigninCheck()
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

  if (status === 'loading') {
    return 'loading'
  }

  if (signInCheckResult.signedIn === true) {
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
  } else {
    return (
      <div>
        <Viewport title={title} />
        <Bar title={title} />
        <Container disableGutters className={classes.paper} maxWidth='md'>
          'Login'
        </Container>
        <BottomNav location={location} />
      </div>
    )
  }
}
export default Layout
