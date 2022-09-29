export interface IToken {
  expiresIn: number
  token: string
}

export interface IUserContextProps {
  isUserLoggedIn: boolean
  user: IUser
  token: IToken
  setUser: React.Dispatch<React.SetStateAction<any>>
  setToken: React.Dispatch<React.SetStateAction<any>>
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default interface IUser {
  _id: string
  email: string
  firstName?: string
  lastName?: string
  password?: string
  createdTimeStamp: string
  updatedTimeStamp?: string
}
