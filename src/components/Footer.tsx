import { Avatar, Box, Grid, Link, Stack, Typography } from '@mui/material'
import {
  LinkedIn,
  Language,
  GitHub,
  AlternateEmail,
  Favorite,
} from '@mui/icons-material'
import footerLogo from '../assets/logo_with_bg.webp'

const Footer = () => {
  return (
    <Box
      sx={{ backgroundColor: 'primary.main' }}
      p={{ xs: 2, sm: 3, lg: 4 }}
      mt={4}
    >
      <Box pt={6} pb={{ md: 2 }}>
        <Box sx={{ position: 'relative' }}>
          <Avatar
            alt="J"
            src={footerLogo}
            sx={{
              position: 'absolute',
              top: '-120px',
              left: '50px',
              width: 100,
              height: 100,
            }}
          />
        </Box>
        <Grid
          container
          spacing={6}
          px={{ xs: 0, sm: 2, lg: 4 }}
          py={2}
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h4"
              fontWeight="500"
              component="p"
              color="white"
            >
              DishPoll, A small react app for ranking dishes. Refer to{' '}
              <Link
                href="https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json"
                color="#FFF"
              >
                users.json
              </Link>{' '}
              for dummy usernames and passwords. This project is a part of
              <Link href="https://www.syook.com/" color="#FFF">
                {' '}
                Syook's{' '}
              </Link>
              coding challenge (for frontend) in ReactJS.
            </Typography>
            <Typography
              variant="h4"
              fontWeight="500"
              component="p"
              color="white"
              mt={2}
            >
              Made with{' '}
              <Favorite
                sx={{
                  height: '16px',
                  width: '16px',
                }}
              />{' '}
              by Kushal Khare
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'end',
            }}
          >
            <Stack
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
              spacing={2}
            >
              <Typography
                color="white"
                component="h3"
                variant="h3"
                align="left"
              >
                Know more about me
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                spacing={4}
              >
                <a
                  href="https://www.linkedin.com/in/kushalcodes/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <LinkedIn
                    color="primary"
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      p: '5px',
                      height: '50px',
                      width: '50px',
                    }}
                  />
                </a>
                <a
                  href={'https://github.com/kushal-khare-official'}
                  rel="noreferrer"
                  target="_blank"
                >
                  <GitHub
                    color="primary"
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      p: '5px',
                      height: '50px',
                      width: '50px',
                    }}
                  />
                </a>
                <a
                  href={'http://kushalcodes.tech/'}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Language
                    color="primary"
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      p: '5px',
                      height: '50px',
                      width: '50px',
                    }}
                  />
                </a>
                <a
                  href={'mailto:kushalkhare.official@gmail.com'}
                  rel="noreferrer"
                  target="_blank"
                >
                  <AlternateEmail
                    color="primary"
                    sx={{
                      background: 'white',
                      borderRadius: '10px',
                      p: '5px',
                      height: '50px',
                      width: '50px',
                    }}
                  />
                </a>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Footer
