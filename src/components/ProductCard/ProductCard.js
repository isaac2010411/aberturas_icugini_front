import { useContext } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles'
import { Add } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { AppContext } from '../../contexts/AppContext'
import ViewProductModal from '../ViewProductModal/ViewProductModal'
import { formatCurrencyToNum, formatNumToCurrency } from '../../shared/helpers/commonsFunctions'
import productCardStyles from './styles/productCardStyles'

const useStyles = makeStyles(productCardStyles)

const ProductCard = ({ product }) => {
  const classes = useStyles()

  const { addToSalePointList, salePointList } = useContext(AppContext)

  return (
    <Grid item className={classes.productContainer} xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.productCard}>
        <CardContent className={classes.productCardContent}>
          <ViewProductModal item={product} />
          <Grid container direction='row' justifyContent='space-around' alignItems='center'>
            <Grid item>
              <Typography variant='body1'>{formatNumToCurrency(product.publicPrice)} c/u</Typography>
            </Grid>
            <Grid item>
              <Typography variant='body2'>{product.quantity} U</Typography>
            </Grid>
          </Grid>
        </CardContent>
         {product.publicPrice && (
          <CardActions>
            <Button
              className={classes.productButtonStyle}
              variant='outlined'
              size='small'
              color='secondary'
              fullWidth
              startIcon={<Add />}
              disabled={product.quantity <= salePointList.find((ca) => ca._id === product._id)?.quantity}
              onClick={() =>
                addToSalePointList({
                  _id: product._id,
                  title: product.name,
                  image: `${axios.defaults.baseURL}/${product.image}`,
                  quantity: 1,
                  available: product.quantity,
                  publicPrice: formatCurrencyToNum(product.publicPrice),
                })
              }
            >
              Seleccionar
            </Button>
          </CardActions>
        )} 
      </Card>
    </Grid>
  )
}

export default ProductCard
