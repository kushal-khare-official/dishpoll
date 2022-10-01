import { Close } from '@mui/icons-material'
import {
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from '@mui/material'
import { IDish } from '../interfaces/Dish'
import { FormDialog } from '../MuiComponents/Dialog'
import { FormIconButton, PrimaryButton, SecondaryButton } from './Buttons'
import bronze_medal from '../assets/bronze_medal.png'
import silver_medal from '../assets/silver_medal.png'
import gold_medal from '../assets/gold_medal.png'
import VoteCard from './VoteCard'
import { getDishVote, removeVote, vote } from '../service/vote'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const VoteDialog = ({
  dish,
  close,
}: {
  dish: IDish | null
  close: () => void
}) => {
  const [points, setPoints] = useState(0)

  const user = useContext(AuthContext)

  useEffect(() => {
    const getCurrentPoints = async () =>
      setPoints(await getDishVote(dish?.id, user?.uid))

    getCurrentPoints()
  }, [dish?.id, user?.uid])

  return (
    <FormDialog
      open={Boolean(dish)}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle component="div">
        <Typography variant="h2" textAlign="center" sx={{ width: '100%' }}>
          {dish?.dishName}
        </Typography>
        <FormIconButton aria-label="close" onClick={close}>
          <Close fontSize="medium" sx={{ color: '#7C7C7C' }} />
        </FormIconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <VoteCard
            image={silver_medal}
            rank={2}
            points={20}
            setPoints={() => setPoints(20)}
            selected={points === 20}
          />
          <VoteCard
            image={gold_medal}
            rank={1}
            points={30}
            setPoints={() => setPoints(30)}
            selected={points === 30}
          />
          <VoteCard
            image={bronze_medal}
            rank={3}
            points={10}
            setPoints={() => setPoints(10)}
            selected={points === 10}
          />
        </Grid>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: '50px' }}
          spacing={8}
        >
          <SecondaryButton
            sx={{ background: '#EEEEEE' }}
            onClick={async () => {
              setPoints(0)
              await removeVote(dish?.id, user?.uid)
              close()
            }}
          >
            Clear Selection
          </SecondaryButton>
          <PrimaryButton
            sx={{ background: '#EEEEEE' }}
            onClick={async () => {
              await vote(dish?.id, user?.uid, points)
              close()
            }}
          >
            Submit
          </PrimaryButton>
        </Stack>
      </DialogContent>
    </FormDialog>
  )
}

export default VoteDialog
