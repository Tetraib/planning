import React, { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import AppBar from '@material-ui/core/AppBar'
import { BottomNavigationAction } from 'gatsby-theme-material-ui'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'

const BottomNav = ({ location }) => {
  const navLocation = location.pathname.split('/')[1] || 'index'
  const [value, setValue] = useState(navLocation)

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar component={'div'} position='fixed' style={{ top: 'auto', bottom: 0 }}>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction to={`/`} label='1' value='index' icon={<PlayArrowIcon />} />
        <BottomNavigationAction to={`/2`} label='2' value='2' icon={<PlayArrowIcon />} />
        <BottomNavigationAction to={`/3`} label='3' value='3' icon={<PlayArrowIcon />} />
        <BottomNavigationAction to={`/4`} label='4' value='4' icon={<PlayArrowIcon />} />
      </BottomNavigation>
    </AppBar>
  )
}

export default BottomNav
