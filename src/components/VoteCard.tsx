import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

interface IVoteCard {
  image: string
  rank: number
  points: number
  setPoints: () => void
  selected: boolean
}

const VoteCard = ({ image, rank, points, setPoints, selected }: IVoteCard) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card
        sx={{
          width: '100%',
          p: 2,
          cursor: 'pointer',
          scale: '0.7',
          transition: 'all 0.5s ease',
          '&:focus, &:hover, &.selected': {
            scale: '1.0',
          },
        }}
        className={selected ? 'selected' : ''}
        onClick={setPoints}
      >
        <CardMedia
          image={image}
          sx={{ backgroundSize: '100px', width: '100%', height: '150px' }}
        />
        <CardContent>
          <Typography variant="h3" align="center">
            Rank {rank}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center">
            +{points} points
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default VoteCard
