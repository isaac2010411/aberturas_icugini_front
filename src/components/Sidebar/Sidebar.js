import { useContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Store,
  AccountCircle,
  Login,
  PersonAdd,
  Logout,
  People,
  Sell,
  Category,
  Inventory,
  MonetizationOn,
  Notifications,
} from '@mui/icons-material'
import { Avatar, Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import { AppContext } from '../../contexts/AppContext'
import { logout } from '../../redux/actions/userActions'
import Icon from '../../assets/aberturas_icon.jpeg'
import role from '../../cofig/role'

export default function Sidebar() {
  const dispatch = useDispatch()

  const { toggleDrawerState, navigate, setDrawerState } = useContext(AppContext)

  const { userInfo } = useSelector((state) => state.userLogin)

  const selectOption = (path) => {
    navigate(path)
    setDrawerState(false)
  }
  const isActive = (path) => {
    return window.location.pathname === path
  }

  return (
    <Box sx={{ width: '100%' }} role='presentation'>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader
            component='div'
            sx={{ padding: '0 !important', marginBotto: '10rem !important' }}
            id='nested-list-subheader'
            onClick={() => navigate('/')}
          >
            <Avatar
              src={Icon}
              variant='square'
              style={{
                margin: '0 auto',
                height: '60px',
                width: '100%',
                cursor: 'pointer',
              }}
              alt='hypnotic_icon'
            />
          </ListSubheader>
        }
      >
        {!userInfo || (userInfo && userInfo.role === 'user') ? (
          <></>
        ) : (
          <>
            <ListItemButton
              style={{ backgroundColor: isActive('/sale-point') ? '#EEEEEE' : 'white' }}
              onClick={() => selectOption('/sale-point')}
              onKeyDown={toggleDrawerState(false)}
            >
              <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                <MonetizationOn />
              </ListItemIcon>
              <ListItemText primary='Punto de venta' />
            </ListItemButton>
          </>
        )}
        {!userInfo ? (
          <>
            <ListItemButton
              style={{ backgroundColor: isActive('/sign-in') ? '#EEEEEE' : 'white' }}
              onClick={() => selectOption('/sign-in')}
              onKeyDown={toggleDrawerState(false)}
            >
              <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                <Login />
              </ListItemIcon>
              <ListItemText primary='Ingresar' />
            </ListItemButton>
          </>
        ) : (
          <>
            <ListItemButton
              style={{ backgroundColor: isActive('/profile') ? '#EEEEEE' : 'white' }}
              onClick={() => selectOption('/profile')}
              onKeyDown={toggleDrawerState(false)}
            >
              <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary='Mi Perfil' />
            </ListItemButton>
            {userInfo && userInfo.role === role.ADMIN_ROLE && (
              <>
                <ListItemButton
                  style={{ backgroundColor: isActive('/categories') ? '#EEEEEE' : 'white' }}
                  onClick={() => selectOption('/categories')}
                  onKeyDown={toggleDrawerState(false)}
                >
                  <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                    <Category />
                  </ListItemIcon>
                  <ListItemText primary='Administrar Categorias' />
                </ListItemButton>
                <ListItemButton
                  style={{ backgroundColor: isActive('/brands') ? '#EEEEEE' : 'white' }}
                  onClick={() => selectOption('/brands')}
                  onKeyDown={toggleDrawerState(false)}
                >
                  <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                    <Sell />
                  </ListItemIcon>
                  <ListItemText primary='Administrar Marcas' />
                </ListItemButton>
                <ListItemButton
                  style={{ backgroundColor: isActive('/products') ? '#EEEEEE' : 'white' }}
                  onClick={() => selectOption('/products')}
                  onKeyDown={toggleDrawerState(false)}
                >
                  <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                    <Inventory />
                  </ListItemIcon>
                  <ListItemText primary='Administrar Productos' />
                </ListItemButton>
                <ListItemButton
                  style={{ backgroundColor: isActive('/users') ? '#EEEEEE' : 'white' }}
                  onClick={() => selectOption('/users')}
                  onKeyDown={toggleDrawerState(false)}
                >
                  <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                    <People />
                  </ListItemIcon>
                  <ListItemText primary='Usuarios' />
                </ListItemButton>
              </>
            )}
            <ListItemButton onClick={() => dispatch(logout())}>
              <ListItemIcon sx={{ minWidth: { xs: '35px', md: '45px' } }}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary='Salir' />
            </ListItemButton>
          </>
        )}
      </List>
    </Box>
  )
}
