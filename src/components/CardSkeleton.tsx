import { CardContent, Skeleton, Stack } from '@mui/material'
import Card from '@mui/material/Card'
import { Box } from '@mui/system'
import { Fragment, memo } from 'react'

const CardSkeleton = () => {
  return (
    <Fragment>
      <Card
        sx={{
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.2)',
          height: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          transition: '0.15s',
          cursor: 'pointer',
          borderRadius: '4px',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 10px 30px -6px rgba(0,0,0,0.2)',
          },
        }}
      >
        <Skeleton variant="rectangular" width={300} height={300} />
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={0}
          >
            <Box mb={1} display={'flex'} alignItems={'center'}>
              <Skeleton variant="text" width={100} />
            </Box>
            <Skeleton variant="text" width={80} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            spacing={0}
          >
            <Skeleton variant="text" width={60} />
            <Skeleton variant="text" width={10} />
          </Stack>
        </CardContent>
      </Card>
    </Fragment>
  )
}

export default memo(CardSkeleton)
