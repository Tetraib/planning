import React from 'react'
import firebase from 'firebase/app'
import { useSigninCheck, useAuth } from 'reactfire'
import Skeleton from '@material-ui/lab/Skeleton'

const Login = () => {
  const { status, data: signInCheckResult } = useSigninCheck()
  const auth = useAuth()
  const signIn = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }
  const signOut = async () => {
    await auth.signOut()
  }

  if (status === 'loading') {
    return <Skeleton variant="text" />
  }

  if (signInCheckResult.signedIn === true) {
    return (
      <button className='button is-info' onClick={signOut}>
        Sign Out {signInCheckResult.user.displayName}
      </button>
    )
  } else {
    return (
      <button className='button is-primary' onClick={signIn}>
        Sign In
      </button>
    )
  }
}

export default Login
