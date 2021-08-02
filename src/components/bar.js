import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Login from './login'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  title: {
    flexGrow: 1,
  },
}))

const Bar = ({ title }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography className={classes.title} variant='h6'>
            {title}
          </Typography>
          <Login />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Bar
