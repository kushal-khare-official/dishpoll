import { Suspense } from 'react'
import { Grid, Stack } from '@mui/material'
import LoginForm from '../components/LoginForm'
import TextWelcome from '../components/TextWelcome'
import { ImageAndContent } from '../components/ImageAndContent'
import { Route, Routes } from 'react-router-dom'
import SignupForm from '../components/SignupForm'

const Login = () => {
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
