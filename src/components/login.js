import React from 'react'
import firebase from 'firebase/app'
import { useSigninCheck, useAuth } from 'reactfire'
import IconButton from '@material-ui/core/IconButton'
import LockIcon from '@material-ui/icons/Lock'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const errorHandle = (e) => {
  console.log(e)
}

const clearFirestoreCache = () => {
  const map = global.globalThis['_reactFirePreloadedObservables'];
  Array.from(map.keys()).forEach(
    (key) => key.includes('firestore') && map.delete(key),
  );
};

const Login = () => {
  const { status, data: signInCheckResult } = useSigninCheck()
  const auth = useAuth()
  const signIn = async () => {
    await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(errorHandle)
  }
  const signOut = async () => {
    await auth
      .signOut()
      .catch(errorHandle)
      .then(() => {
        // fix a bug in react fire https://github.com/FirebaseExtended/reactfire/discussions/228
        clearFirestoreCache()
        // Or reaload browser
        // window.location.reload()
      })
  }

  if (status === 'loading') {
    return (
      <IconButton>
        <AccountCircleIcon />
      </IconButton>
    )
  }

  if (signInCheckResult.signedIn === true) {
    return (
      <IconButton onClick={signOut}>
        <LockIcon />
      </IconButton>
    )
  } else {
    return (
      <IconButton onClick={signIn}>
        <AccountCircleIcon />
      </IconButton>
    )
  }
}

export default Login
