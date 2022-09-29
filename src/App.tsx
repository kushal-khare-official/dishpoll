import { lazy, Suspense } from 'react'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import { Box, Container, CssBaseline, ThemeProvider } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import AuthRoute from './components/AuthRoute'
import theme from './styles/styles'
import { AuthProvider } from './provider/AuthProvider'
import SnackbarProvider from './provider/SnackbarProvider'

const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))
const Vote = lazy(() => import('./pages/Vote'))
const Results = lazy(() => import('./pages/Results'))

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <SnackbarProvider>
            <Box>
              <CssBaseline />

              <Header />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '70vh',
                  pt: 15,
                  pb: 10,
                }}
              >
                <Container>
                  <Suspense fallback="Loading...">
                    <Routes>
                      <Route path="/login" element={<Login />} />
                      <Route
                        path="/"
                        element={
                          <AuthRoute>
                            <Home />
                          </AuthRoute>
                        }
                      />
                      <Route
                        path="/vote"
                        element={
                          <AuthRoute>
                            <Vote />
                          </AuthRoute>
                        }
                      />
                      <Route
                        path="/results"
                        element={
                          <AuthRoute>
                            <Results />
                          </AuthRoute>
                        }
                      />
                    </Routes>
                  </Suspense>
                </Container>
              </Box>

              <Outlet />

              <Footer />
            </Box>
          </SnackbarProvider>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
