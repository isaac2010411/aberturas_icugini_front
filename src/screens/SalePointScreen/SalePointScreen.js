import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import Page from '../../components/Page/Page'
import SalePiontSearch from './components/SalePointSearch'
import ProductGrid from '../../components/ProductsGrid/ProductsGrid'
import CartList from '../../components/CartList/CartList'
import { AppContext } from '../../contexts/AppContext'
import { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'date-fns'
import { capitalize } from '../../shared/helpers/commonsFunctions'
import { updateProductQuantity } from '../../redux/actions/productActions'
import CustomSnackbar from '../../components/CustomSnackBar/CustomSnackBar'
import { PRODUCT_REDUCE_QUANTITY_RESET } from '../../redux/constants/productConstants'

const SalePiontScreen = () => {
  const dispatch = useDispatch()
  const [alert, setAlert] = useState(false)
  const [successMessage, setSuccessMesage] = useState('')
  const { salePointList } = useContext(AppContext)
  const { userInfo } = useSelector((state) => state.userLogin)

  const { loadingProductReduceQuantity, successProductReduceQuantity } = useSelector(
    (state) => state.productReduceQuantity
  )
  
  useEffect(() => {
    if (successProductReduceQuantity) {
      setAlert(true)
      setSuccessMesage('Hecho correctamente')

      setTimeout(() => {
        setAlert(false)
        setSuccessMesage('')
        dispatch({ type: PRODUCT_REDUCE_QUANTITY_RESET })
      }, 2000)
    }
  }, [successProductReduceQuantity])

  const handleUpdateProductQuantity = async () => {
    const data = salePointList.map((item) => ({ _id: item._id, quantity: item.quantity }))

    dispatch(updateProductQuantity(data))
  }

  return (
    <Page title='Punto de venta' style={{ heigth: '100%' }}>
      <Grid container direction='row' justifyContent='flex-start' alignItems='stretch' spacing={3} p={2}>
        <Grid item xs={12}>
          <Typography variant='h4'>Punto de venta</Typography>
          Fecha: {format(new Date(), 'dd / MM / yyyy')}
          <br />
          Usuario:{' '}
          <span style={{ fontWeight: '600', color: '#1c4d8f' }}>{`${capitalize(userInfo.name)} ${capitalize(
            userInfo?.lastName || ''
          )}`}</span>{' '}
          <br />
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container>
            <Grid item xs={12}>
              <SalePiontSearch />
            </Grid>
            <Grid item xs={12} mt={3}>
              <ProductGrid />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card mt={7}>
            <CardHeader title={<Typography variant='overline'>Productos a descontar</Typography>}></CardHeader>
            <CardContent style={{ minHeight: '500px' }}>
              <CartList />
            </CardContent>
            <CardActions>
              {salePointList.length > 0 && (
                <Button
                  fullWidth
                  color='secondary'
                  variant='contained'
                  disabled={loadingProductReduceQuantity}
                  onClick={handleUpdateProductQuantity}
                >
                  Descontar unidades
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {successProductReduceQuantity && (
        <CustomSnackbar open={alert} setOpen={setAlert} message={successMessage} severity={'success'} />
      )}
    </Page>
  )
}

export default SalePiontScreen
