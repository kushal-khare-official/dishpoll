import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../config/firebase'

export const signup = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password)
    console.log(response)
    return response.user
  } catch (error: any) {
    console.log(error.code)
    return error
  }
}

export const login = async (email: string, password: string) => {
  await signInWithEmailAndPassword(auth, email, password)
}
