import { useEffect, useState } from 'react'
import { User } from 'firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../config/firebase'

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser)
    })

    return unsubscribe
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}
