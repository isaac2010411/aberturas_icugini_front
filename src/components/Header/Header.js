import { Grid, Typography } from '@mui/material'
import CartButton from '../CartButton/CartButton'
import MiniSidebar from './components/MiniSidebar'
import BigSidebar from './components/BigSidebar'
import headerStyles from './styles/headerStyles'
import Icon from '../../assets/aberturas_icon.jpeg'
import { useContext } from 'react'
import { AppContext } from '../../contexts/AppContext'

const Header = () => {
  const { navigate } = useContext(AppContext)
  return (
    <Grid container>
      <Grid
        item
        xs={8}
        sm={10}
        sx={{ display: 'flex', alignItems: 'center', paddingLeft: '1rem' }}
        onClick={() => navigate('/')}
      ></Grid>
      <Grid item xs={2} sm={1} md={12} sx={headerStyles.headerCart}>
        <CartButton />
      </Grid>
      <Grid item xs={2} sm={1} sx={headerStyles.headerDrawer}>
        <MiniSidebar />
      </Grid>
      <Grid item xs={12} sx={headerStyles.headerDrawerBig}>
        <BigSidebar />
      </Grid>
    </Grid>
  )
}

export default Header
