import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Box, Grid, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { FormTextField } from '../MuiComponents/TextFIeld'
import { useSnackbarContext } from '../context/Snackbar'
import * as firebaseService from '../service/firebase'
import { AuthContext } from '../context/AuthContext'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const LoginForm = () => {
  const navigate = useNavigate()
  const user = useContext(AuthContext)
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const handleSubmit = (values: any, setSubmitting: any) => {
    firebaseService
      .login(values.email, values.password)
      .then(() => {
        setSubmitting(false)
        navigate('/')
      })
      .catch((error: any) => {
        showToast(true, 'error', error.code, 'center')
        setSubmitting(false)
      })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting)
    },
  })

  useEffect(() => {
    if (user) {
      navigate('/')
    }
  }, [user, navigate])

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <Grid container spacing={2}>
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
            autoFocus
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
            autoComplete="current-password"
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
      </Grid>
      <LoadingButton
        type="submit"
        loading={formik.isSubmitting}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Log In
      </LoadingButton>
    </Box>
  )
}

export default LoginForm
