const { Search } = require('@mui/icons-material')
const { Grid, Typography } = require('@mui/material')

const ItemNotFound = ({ text }) => {
  return (
    <Grid container alignItems='center' direction='column' rowSpacing={2} columnSpacing={3} marginTop={'13rem'}>
      <Grid item>
        <Search style={{ fontSize: '35px' }} />
      </Grid>
      <Grid item>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  )
}

export default ItemNotFound
