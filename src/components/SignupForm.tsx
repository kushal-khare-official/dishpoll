import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Box, Grid, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { FormTextField } from '../MuiComponents/TextFIeld'
import { useSnackbarContext } from '../context/Snackbar'
import * as firebaseService from '../service/auth'

function SignUpEmail() {
  const navigate = useNavigate()
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const handleSubmit = (values: any, setSubmitting: any) => {
    firebaseService
      .signup(values.userName, values.email, values.password)
      .then(() => {
        setSubmitting(false)
        navigate('/')
      })
      .catch((error: any) => {
        showToast(true, 'error', error.code, 'center')
        setSubmitting(false)
      })
  }

  const validationSchema = yup.object({
    userName: yup.string().required('UserName is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(4, 'Password should be of minimum 4 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .min(4, 'Password should be of minimum 4 characters length')
      .oneOf([yup.ref('password'), null], 'passwords do not match')
      .required('Confirm Password is required'),
  })
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting)
    },
  })

  return (
    <Box
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      sx={{ mt: 1 }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Your User Name *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="username"
            autoFocus
            id="userName"
            name="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Your Email Address *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Enter Password *
          </Typography>
          <FormTextField
            required
            autoComplete="new-password"
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Confirm Password *
          </Typography>
          <FormTextField
            required
            autoComplete="new-password"
            fullWidth
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </Grid>
      </Grid>
      <LoadingButton
        loading={formik.isSubmitting}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </LoadingButton>
      <Typography
        variant="h6"
        component="h3"
        fontWeight="500"
        color="text.secondary"
        paragraph
      >
        Already have an account?{' '}
        <span
          style={{ color: '#0093E3', cursor: 'pointer' }}
          onClick={() => navigate('/login')}
        >
          Log In
        </span>
      </Typography>
    </Box>
  )
}

export default SignUpEmail
