import React from 'react'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import patchBaseButtonComponent from 'gatsby-material-ui-components/lib/patch-base-button-components'
const ListItemPatched = patchBaseButtonComponent(ListItem)

const UserItem = ({user}) => {
  return (
    <ListItemPatched button to={'/'}>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={user.name} />
    </ListItemPatched>
  )
}

export default UserItem
