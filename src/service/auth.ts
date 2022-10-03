import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { child, get, ref, set } from 'firebase/database'
import { auth, db } from '../config/firebase'

export const signup = async (
  userName: string,
  email: string,
  password: string
) => {
  await set(ref(db, `users/${userName}`), email)

  await createUserWithEmailAndPassword(auth, email, password)
}

export const login = async (userName: string, password: string) => {
  const dbRef = ref(db)
  const snapshot = await get(child(dbRef, `users/${userName}`))

  if (!snapshot.exists()) {
    throw new Error('No User Found')
  }

  const email = snapshot.val()

  await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  await signOut(auth)
}
