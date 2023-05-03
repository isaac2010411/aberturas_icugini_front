import { Grid, Typography } from '@mui/material'
import notFoundImage from '../../assets/notfoundpage.svg'
const NotFoundScreen = () => {
  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '5rem' }}>
      <Grid item>
        <img src={notFoundImage} alt=''></img>
        <Typography variant='h1' textAlign='center'>
          Pagina no encontrada
        </Typography>
      </Grid>
    </Grid>
  )
}

export default NotFoundScreen
