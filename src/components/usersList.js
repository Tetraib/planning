import React from 'react'
import List from '@material-ui/core/List'
import UserItem from './userItem'
import Fab from '@material-ui/core/Fab'
import { makeStyles } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import { useFirestore, useFirestoreCollectionData, useSigninCheck } from 'reactfire'
const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(2),
  },
}))

const UserList = () => {
  const { status } = useSigninCheck()

  const usersCollection = useFirestore().collection('users')
  const { data: users = [{ nom: 'test' }] } = useFirestoreCollectionData(usersCollection)
  console.log(users)
  const classes = useStyles()
  return (
    <div>
      <List>
        {users.map((user) => {
          return <UserItem user={user.nom} />
        })}
      </List>
      <Fab className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  )
}

export default UserList
