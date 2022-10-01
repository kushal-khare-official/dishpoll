import { styled } from '@mui/material/styles'
import { Dialog } from '@mui/material'

export const FormDialog = styled(Dialog)(({ theme }) => ({
  background: 'rgba(153, 153, 153, 0.4)',
  minHeight: '25vh',
  borderRadius: '20px',
  '& .MuiDialog-paper': {
    minHeight: '50vh',
    width: '90vw',
    maxWidth: '800px',
  },
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(3),
    background: '#EEEEEE',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '& .MuiDialogContent-root': {
    width: '100%',
    background: '#EEEEEE',
    padding: theme.spacing(3),
  },
  '& .MuiDialogActions-root': {
    background: '#EEEEEE',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
