import React from 'react'
import List from '@material-ui/core/List'
import UserItem from './userItem'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(2),
  },
}))

const users = { 123: { name: 'Jean' }, 456: { name: 'Raymond' } }
const UserList = () => {
  const usersCollection = useFirestore().collection('users');
  const lobby = useFirestoreCollectionData(usersCollection);
  console.log(lobby)
  const classes = useStyles()
  return (
    <div>
      <List>
        {Object.keys(users).map((user) => {
          return <UserItem user={users[user]} />
        })}
      </List>
      <Fab className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default UserList
