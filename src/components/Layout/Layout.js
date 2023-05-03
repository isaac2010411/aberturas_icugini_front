import { Outlet } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import Header from '../Header/Header'
import layoutStyles from './styles/layoutStyles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(layoutStyles)

const Layout = () => {
  const classes = useStyles()
  const { userInfo } = useSelector((state) => state.userLogin)
  return (
    <Grid container className={classes.layoutContainer}>
      {userInfo && (
        <Grid item xs={12} md={2}>
          <Header />
        </Grid>
      )}

      <Grid item xs={12} md={!userInfo ? 12 : 10} className={classes.ouletStyles}>
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Layout
