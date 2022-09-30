import { memo } from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { VoteButton } from './Buttons'
import { IDish } from '../interfaces/Dish'

const DishCard = ({ item }: { item: IDish }) => {
  return (
    <Card
      sx={{
        backgroundColor: '#EEEEEE',
        margin: 'auto',
        position: 'relative',
        maxWidth: 350,
        height: 400,
        borderRadius: '10px',
        transition: '0s',
        boxShadow:
          '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
        '&:focus, &:hover': {
          '.MuiCardMedia-root': {
            transform: 'scale(1.2)',
          },
          '.MuiCardContent-root': {
            transform: 'translateY(-100%)',
          },
        },
      }}
    >
      <CardMedia
        sx={{
          position: 'relative',
          m: 'auto',
          display: 'block',
          height: 400,
          width: '100%',
          backgroundPosition: 'center',
          transition: 'all .7s ease',
        }}
        image={`${item.image}`}
      />
      <CardContent
        sx={{
          position: 'relative',
          zIndex: '2',
          p: 1,
          pb: '0 !important',
          color: 'white',
          transform: 'translateY(-50px)',
          transition: 'all .3s ease',
        }}
      >
        <Typography
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            m: 2,
            mt: 0,
          }}
          variant="h2"
          fontWeight="300"
          textAlign="left"
          gutterBottom
        >
          {item.dishName}
        </Typography>
        <Typography
          sx={{
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          variant="body2"
          textAlign="left"
          gutterBottom
        >
          {item.description}
        </Typography>
        <VoteButton>Vote</VoteButton>
      </CardContent>
    </Card>
  )
}

export default memo(DishCard)
