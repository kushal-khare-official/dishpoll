import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import DishCard from '../components/DishCard'
import CardSkeleton from '../components/CardSkeleton'
import { IDish } from '../interfaces/Dish'

const Vote = () => {
  const [dishData, setDishData] = useState<IDish | any>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')
      .then((res) => res.json())
      .then((res) => setDishData(res))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <Grid container spacing={4} mb={12} justifyContent="space-evenly">
      {!loading && dishData
        ? dishData.map((dish: IDish) => (
            <Grid item key={dish.id} xs={12} sm={4} md={3}>
              <DishCard item={dish} />
            </Grid>
          ))
        : [0, 1, 2, 3].map((index) => (
            <Grid item key={index} xs={12} sm={4} md={3}>
              <CardSkeleton />
            </Grid>
          ))}
    </Grid>
  )
}

export default Vote
