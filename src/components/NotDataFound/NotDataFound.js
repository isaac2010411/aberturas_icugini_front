import { Grid, Typography } from '@mui/material'
import NotFoundDataImage from '../../assets/no_data.svg'

const NotDataFound = ({ message }) => {
  return (
    <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10rem' }}>
      <Grid
        item
        xs={12}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
      >
        <img
          src={NotFoundDataImage}
          style={{ height: '200px', width: '200px', margin: '0 auto' }}
          alt='Datos no encontrados'
        />
        {message}
      </Grid>
    </Grid>
  )
}

export default NotDataFound
