import { Suspense } from 'react'
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'
import { Box, CssBaseline } from '@mui/material'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Home from './pages/Home'
import Vote from './pages/Vote'
import Results from './pages/Results'

const App = () => {
  return (
    <BrowserRouter>
      <Box>
        <CssBaseline />

        <Header />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '80vh',
          }}
        >
          <Suspense fallback="Loading...">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/vote" element={<Vote />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </Suspense>
        </Box>

        <Outlet />

        <Footer />
      </Box>
    </BrowserRouter>
  )
}

export default App
