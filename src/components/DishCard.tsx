import { memo } from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { VoteButton } from './Buttons'
import { IDish } from '../interfaces/Dish'

const DishCard = ({ item, openDialog }: { item: IDish, openDialog: () => void }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        m: 'auto',
        mt: '150px',
        height: '400px',
        width: '95%',
        borderRadius: '25px',
        overflow: 'visible',
        boxShadow: '0px 14px 80px rgb(34 35 58 / 20%)',
      }}
    >
      <CardMedia
        sx={{
          transform: 'translateY(-50%)',
          height: 250,
          width: '90%',
          m: 'auto',
          backgroundPosition: 'center',
          boxShadow: '4px 13px 30px 1px rgb(252 56 56 / 20%)',
          borderRadius: '20px',
        }}
        image={`${item.image}`}
      />
      <CardContent
        sx={{
          mt: '-100px',
          textAlign: 'center',
          p: '0 30px',
        }}
      >
        <Typography
          sx={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            m: 2,
          }}
          variant="h2"
          fontWeight="500"
          textAlign="center"
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
          variant="h6"
          color="text.secondary"
          textAlign="center"
          gutterBottom
        >
          {item.description.substring(0, 120) + '...'}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: 'absolute',
          width: '150px',
          pb: 1.5,
          bottom: '0',
          ml: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <VoteButton onClick={openDialog}>Vote</VoteButton>
      </CardActions>
    </Card>
  )
}

export default memo(DishCard)
