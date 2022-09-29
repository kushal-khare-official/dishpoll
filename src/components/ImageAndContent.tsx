import { Box, Grid, Stack, Typography } from '@mui/material'

import LandingImage from '../assets/landingImage.png'

export const ImageAndContent = () => {
  return (
    <Grid item xs={12} sm={6}>
      <Stack
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        <Box
          component={'img'}
          sx={{
            objectFit: 'cover',
            height: '18rem',
            width: '100%',
            filter:
              'drop-shadow(-10px -10px 20px #FFFFFF) drop-shadow(10px 10px 20px rgba(142, 209, 252, 0.25))',
          }}
          src={LandingImage}
          alt="Image"
        />
        <Typography variant="h5" component="h3" color="primary">
          Join DishPoll
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          align="center"
          paragraph
          color="text.secondary"
        >
          &amp;
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          align="center"
          paragraph
          color="text.secondary"
          fontWeight="500"
        >
          Vote for your favorite dish
        </Typography>
      </Stack>
    </Grid>
  )
}
