import { Typography } from '@mui/material'
import { useEffect } from 'react'
import { getVote } from '../service/vote'

const Results = () => {
  useEffect(() => {
    getVote()
  }, [])

  return <Typography variant="h1">Page Under Construction</Typography>
}

export default Results
