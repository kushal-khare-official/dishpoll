import { styled } from '@mui/material/styles'
import MuiTextField from '@mui/material/TextField'
import theme from '../styles/styles'

export const FormTextField = styled(MuiTextField)(() => ({
  background: '#EEEEEE',
  borderRadius: '5px',
  marginBottom: '15px',
  marginTop: '15px',
  fontWeight: '400',
  fontSize: '16px',
  width: '100%',
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiOutlinedInput-root': {
    boxShadow: theme.shadows[1],
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset, &.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}))
