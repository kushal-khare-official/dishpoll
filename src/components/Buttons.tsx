import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

export const VoteButton = styled(MuiButton)((props) => ({
  margin: 0,
  padding: 0,
  borderRadius: '5px',
  minHeight: '48px',
  fontSize: 16,
  width: '100%',
  color: 'white',
  textTransform: 'uppercase',
}))
