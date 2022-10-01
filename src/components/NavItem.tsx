import React from 'react'
import { MenuItem, Link } from '@mui/material'

type Props = {
  menu: {
    menuLink: string
    menuText: string
    onClick: () => void
  }
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void
  active: string
  setActive: (s: string) => void
}

const NavItem = ({ menu, handleCloseNavMenu, active, setActive }: Props) => {
  return (
    <MenuItem
      key={menu.menuLink}
      onClick={handleCloseNavMenu}
      sx={{ m: 2, '&:hover': { textDecoration: 'none' } }}
    >
      <Link
        component="a"
        onClick={menu.onClick}
        color={active === menu.menuLink ? 'primary' : '#000'}
        sx={{
          fontSize: 16,
          fontWeight: 700,
          textDecoration: 'none',
        }}
      >
        {menu.menuText}
      </Link>
    </MenuItem>
  )
}

export default NavItem
