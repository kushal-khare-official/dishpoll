import React, { useState } from 'react'
import UserContext, { initialUserInformation } from '../context/User'
import IUser, { IToken, IUserContextProps } from '../interfaces/user'

interface IUserContextProviderProps {
  children: React.ReactNode
}

const UserContextProvider = ({ children }: IUserContextProviderProps) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>(initialUserInformation.user)

  const [token, setToken] = useState<IToken>({
    expiresIn: 0,
    token: '',
  })

  const UserInformation: IUserContextProps = {
    isUserLoggedIn: isUserLoggedIn,
    user: user,
    token: token,
    setToken: setToken,
    setUser: setUser,
    setIsUserLoggedIn: setIsUserLoggedIn,
  }

  return (
    <UserContext.Provider value={UserInformation}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
