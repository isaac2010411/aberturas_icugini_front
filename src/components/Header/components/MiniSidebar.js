import { useContext } from 'react'
import { Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Sidebar from '../../Sidebar/Sidebar'
import { AppContext } from '../../../contexts/AppContext'

export default function MiniSidebar({ navigate }) {
  const { drawerState, toggleDrawerState } = useContext(AppContext)

  return (
    <>
      <IconButton onClick={toggleDrawerState(true)}>
        <MenuIcon style={{ fontSize: '32px' }} />
      </IconButton>
      <Drawer anchor={'right'} open={drawerState} onClose={toggleDrawerState(false)}>
        <Sidebar navigate={navigate} />
      </Drawer>
    </>
  )
}
