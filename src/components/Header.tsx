import React, { useContext, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Box, Container, IconButton, Menu, Toolbar } from '@mui/material'
import { StyledAppbar } from '../MuiComponents/AppBar'
import { SecondaryButton } from '../components/Buttons'
import NavItem from './NavItem'
import { AuthContext } from '../context/AuthContext'
import { useSnackbarContext } from '../context/Snackbar'
import { logout } from '../service/auth'
import logo from '../assets/logo.png'

const Header = () => {
  const user = useContext(AuthContext)
  const {
    ToastService: { showToast },
  } = useSnackbarContext()

  const navigate = useNavigate()
  const location = useLocation()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [active, setActive] = React.useState<string>('')

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleLogOut = () => {
    logout()
    showToast(true, 'success', 'User logged out successfully!', 'center')
    navigate('/')
  }

  const menuList = [
    {
      menuLink: 'vote',
      menuText: 'Vote',
      onClick: () => {
        navigate('/vote')
      },
    },
    {
      menuLink: 'results',
      menuText: 'Results',
      onClick: () => {
        navigate('/results')
      },
    },
  ]

  const LogoutMenuItem = {
    menuLink: 'logout',
    menuText: 'Logout',
    onClick: handleLogOut,
  }

  useEffect(() => {
    setActive(location.pathname.substring(1))
  }, [location])

  return (
    <StyledAppbar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/home">
            <Box
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              height="100px"
              component={'img'}
              src={logo}
              alt="LOGO"
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menuList.map((menu, i) => (
                <NavItem
                  key={i}
                  menu={menu}
                  handleCloseNavMenu={handleCloseNavMenu}
                  active={active}
                  setActive={setActive}
                />
              ))}
              {user && (
                <NavItem
                  menu={LogoutMenuItem}
                  handleCloseNavMenu={handleCloseNavMenu}
                  active={active}
                  setActive={setActive}
                />
              )}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: 'flex-end',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            {menuList.map((menu, i) => (
              <NavItem
                key={i}
                menu={menu}
                handleCloseNavMenu={handleCloseNavMenu}
                active={active}
                setActive={setActive}
              />
            ))}
            {user && (
              <NavItem
                menu={LogoutMenuItem}
                handleCloseNavMenu={handleCloseNavMenu}
                active={active}
                setActive={setActive}
              />
            )}
          </Box>

          {/*  LogIn button  */}
          <Box sx={{ flexGrow: 0 }}>
            <Box
              alignItems="center"
              sx={{ display: { xs: 'flex', md: 'flex' } }}
            >
              {!user && (
                <Link to="login">
                  <SecondaryButton variant="contained">Log In</SecondaryButton>
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppbar>
  )
}

export default Header
