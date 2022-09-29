import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const TextWelcome = () => {
  return (
    <>
      <Typography component="h1" variant="h1" align="left" gutterBottom>
        Welcome to DishPoll :)
      </Typography>
      <Typography
        component="h3"
        variant="body1"
        fontWeight="400"
        align="left"
        paragraph
        color="text.secondary"
      >
        By creating your account you agree to our{' '}
        <Link to="/terms">
          <Typography
            variant="body1"
            color="primary"
            fontWeight="600"
            display="inline"
          >
            Terms and Conditions{' '}
          </Typography>
        </Link>
        and{' '}
        <Link to="/privacy-policy">
          <Typography
            variant="body1"
            color="primary"
            fontWeight="600"
            display="inline"
          >
            Privacy Policy.
          </Typography>
        </Link>
      </Typography>
    </>
  )
}

export default TextWelcome
