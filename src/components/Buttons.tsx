import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

export const PrimaryButton = styled(MuiButton)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '132px',
  boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(24, 26, 43, 0.25)',
  textTransform: 'uppercase',
}))

export const SecondaryButton = styled(MuiButton)(() => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  minWidth: '132px',
  background: '#EEEEEE',
  color: '#0093E3',
  textTransform: 'uppercase',
  '&:hover': {
    boxShadow: '-8px -8px 16px #FFFFFF, 8px 8px 16px rgba(142, 209, 252, 0.25)',
    backgroundColor: '#EEEEEE',
  },
}))

export const VoteButton = styled(MuiButton)((props) => ({
  margin: 0,
  marginTop: 10,
  padding: 0,
  borderRadius: '50px',
  minHeight: '48px',
  fontSize: 16,
  width: '100%',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  background: 'linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)',
  boxShadow: '0px 14px 80px rgb(252 56 56 / 40%)',
}))

export const FormIconButton = styled(MuiButton)((props) => ({
  color: 'Background',
  zIndex: '2',
  boxShadow: '-6px -6px 12px #FFFFFF, 6px 6px 12px rgba(24, 26, 43, 0.25)',
  borderRadius: '5px',
  marginLeft: '0.5em',
}))
