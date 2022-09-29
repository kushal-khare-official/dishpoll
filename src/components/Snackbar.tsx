import { memo } from 'react'
import { Snackbar, SnackbarOrigin, Typography } from '@mui/material'
import Alert, { AlertProps } from '@mui/material/Alert'

interface IToastProps {
  open: boolean
  type: AlertProps['severity']
  message: string
  setOpen: (value: boolean) => void
  horizontalAlignment: SnackbarOrigin['horizontal']
  verticalAlignment: SnackbarOrigin['vertical']
}

const Toast = (props: IToastProps) => {
  const {
    open,
    type,
    message,
    setOpen,
    horizontalAlignment,
    verticalAlignment,
  } = props

  return (
    <Snackbar
      anchorOrigin={{
        vertical: verticalAlignment,
        horizontal: horizontalAlignment,
      }}
      open={open}
      autoHideDuration={3000}
      sx={{ zIndex: '1800' }}
      onClose={() => setOpen(false)}
    >
      <Alert
        variant="filled"
        elevation={6}
        onClose={() => setOpen(false)}
        severity={type}
      >
        <Typography variant="h6">{message}</Typography>
      </Alert>
    </Snackbar>
  )
}

Toast.defaultProps = { horizontalAlignment: 'right', verticalAlignment: 'top' }
export default memo(Toast)
