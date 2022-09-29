import { createContext } from 'react'
import { IUserContextProps } from '../interfaces/user'

export const initialUserInformation: IUserContextProps = {
  user: {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    createdTimeStamp: '',
    updatedTimeStamp: '',
  },
  token: {
    expiresIn: 0,
    token: '',
  },
  isUserLoggedIn: false,
  setUser: () => {},
  setToken: () => {},
  setIsUserLoggedIn: () => {},
}

const UserContext = createContext(initialUserInformation)

export default UserContext
