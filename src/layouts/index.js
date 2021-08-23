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
  const { status, data: signInCheckResult } = useSigninCheck()
  if (status === 'loading') return <div>Loading</div>

  return (
    <div>
      <Viewport title={title} />
      <Bar title={title} />
      <Container disableGutters className={classes.paper} maxWidth='md'>
        {signInCheckResult.signedIn ? <div>{children}</div> : <div>Se connecter</div>}
      </Container>
      <BottomNav location={location} />
    </div>
  )
}
export default Layout
