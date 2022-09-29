import { Grid, Stack } from '@mui/material'
import LoginForm from '../components/LoginForm'
import TextWelcome from '../components/TextWelcome'
import { ImageAndContent } from '../components/ImageAndContent'

const Login = () => {
  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6}>
        <Stack direction="column" spacing={2} maxWidth={500}>
          <TextWelcome />
          <LoginForm />
        </Stack>
      </Grid>
      <ImageAndContent />
    </Grid>
  )
}

export default Login
