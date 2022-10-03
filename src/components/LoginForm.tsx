import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Box, Grid, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { FormTextField } from '../MuiComponents/TextFIeld'
import { useSnackbarContext } from '../context/Snackbar'
import * as firebaseService from '../service/auth'

const validationSchema = yup.object({
  userName: yup.string().required('UserName is required'),
  password: yup
    .string()
    .min(4, 'Password should be of minimum 4 characters length')
    .required('Password is required'),
})

const LoginForm = () => {
  const navigate = useNavigate()
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const handleSubmit = (values: any, setSubmitting: any) => {
    firebaseService
      .login(values.userName, values.password)
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
      userName: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting)
    },
  })

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
            Your User Name *
          </Typography>
          <FormTextField
            required
            fullWidth
            autoComplete="userName"
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

      <Typography
        variant="h6"
        component="h3"
        fontWeight="500"
        color="text.secondary"
        paragraph
      >
        Don&apos;t have an account?{' '}
        <span
          style={{ color: '#0093E3', cursor: 'pointer' }}
          onClick={() => navigate('/login/signup')}
        >
          Sign Up
        </span>
      </Typography>
    </Box>
  )
}

export default LoginForm
