import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Box, Grid, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { FormTextField } from '../MuiComponents/TextFIeld'
import { useSnackbarContext } from '../context/Snackbar'
import * as firebaseService from '../service/firebase'

function SignUpEmail() {
  const navigate = useNavigate()
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const handleSubmit = (values: any, setSubmitting: any) => {
    firebaseService
      .signup(
        values.firstName,
        values.lastName,
        values.email,
        values.password,
        values.confirmPassword
      )
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
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .oneOf([yup.ref('password'), null], 'passwords do not match')
      .required('Confirm Password is required'),
  })
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
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
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            First Name *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="given-name"
            autoFocus
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            component="label"
            variant="subtitle2"
            color="text.secondary"
          >
            Last Name *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="family-name"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
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
      <Typography variant="h4" component="h3" color="text.secondary" paragraph>
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
