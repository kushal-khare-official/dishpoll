import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../config/firebase'

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) throw new Error('Passwords do not match')

  await createUserWithEmailAndPassword(auth, email, password)

  if (auth.currentUser)
    await updateProfile(auth.currentUser, {
      displayName: firstName + ' ' + lastName,
    })
}

export const login = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  await signOut(auth)
}
