import { useContext, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import UserContext from '../context/User'
import * as UserService from '../service/user'

const Header = () => {
  const { setIsUserLoggedIn, setUser, setToken } = useContext(UserContext)

  useEffect(() => {
    const UserData = UserService.getCurrentUser()
    if (UserData != null) {
      setUser(UserData.data)
      setToken(UserData.token)
      setIsUserLoggedIn(true)
    } else {
      setIsUserLoggedIn(false)
    }
  })

  return (
    <Box position="absolute" top="0">
      <Typography variant="h6">Header</Typography>
    </Box>
  )
}

export default Header
