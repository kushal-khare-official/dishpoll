import { Suspense, useContext, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Grid, Stack } from '@mui/material'
import LoginForm from '../components/LoginForm'
import TextWelcome from '../components/TextWelcome'
import { ImageAndContent } from '../components/ImageAndContent'
import SignupForm from '../components/SignupForm'
import { AuthContext } from '../context/AuthContext'

const Login = (props: any) => {
  const user = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (user) {
      navigate(location.state.from.pathname)
    }
  })

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Stack direction="column" spacing={2} maxWidth={500}>
          <TextWelcome />
          <Suspense fallback="Loading...">
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/signup" element={<SignupForm />} />
            </Routes>
          </Suspense>
        </Stack>
      </Grid>
      <ImageAndContent />
    </Grid>
  )
}

export default Login
