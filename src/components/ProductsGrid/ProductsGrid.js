import { useContext, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import Loader from '../Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../redux/actions/productActions'
import { AppContext } from '../../contexts/AppContext'
import { makeStyles } from '@mui/styles'
import { PRODUCT_GET_ALL_RESET } from '../../redux/constants/productConstants'
import axios from 'axios'
import { formatCurrencyToNum, intermediateCurrency } from '../../shared/helpers/commonsFunctions'

const useStyles = makeStyles({
  hoverComponent: {
    '&:hover': { backgroundColor: '#F8F9F9', borderRadius: '1rem' },
  },
})

const ProductGrid = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  const { searchSalePointList, addToSalePointList, setSalePointList } = useContext(AppContext)
  const { loadingProductGetAll, productGetAllData, successProductGetAll } = useSelector((state) => state.productGetAll)
  const { productReduceQuantityData } = useSelector((state) => state.productReduceQuantity)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  useEffect(() => {
    if (productGetAllData) {
      setProducts(() => [
        ...productGetAllData.products
          .filter((product) => product.quantity > 0)
          .filter((product) => Boolean(product.published) === true),
      ])
    }
  }, [productGetAllData])

  useEffect(() => {
    if (productReduceQuantityData) {
      const data = products.map((item) => {
        return {
          ...item,
          quantity: productReduceQuantityData.find((f) => f._id === item._id)
            ? item.quantity - productReduceQuantityData.find((f) => f._id === item._id).quantity
            : item.quantity,
        }
      })
      setSalePointList([])
      setProducts(() => data)
    }
  }, [productReduceQuantityData])

  useEffect(() => {
    return () => {
      dispatch({ type: PRODUCT_GET_ALL_RESET })
    }
  }, [dispatch])

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={{ xs: 3 }} pb={5}>
      {loadingProductGetAll ? (
        <Grid item xs={2} md={1} style={{ marginTop: '5rem' }}>
          <Loader />
        </Grid>
      ) : successProductGetAll ? (
        <>
          <Grid item xs={12}>
            {products && products.length > 0 ? (
              <>
                <Grid item xs={12}>
                  <Grid
                    container
                    style={{
                      padding: '.5rem',
                      borderTopLeftRadius: '10px',
                      borderTopRightRadius: '10px',
                    }}
                  >
                    <Grid
                      item
                      xs={3}
                      sm={3}
                      md={3}
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '1.5',
                        color: 'rgb(125, 135, 156)',
                        textAlign: 'left',
                        textRransform: 'none',
                        whiteSpace: 'normal',
                      }}
                    >
                      Producto
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      sm={3}
                      md={3}
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '1.5',
                        color: 'rgb(125, 135, 156)',
                        textAlign: 'left',
                        textRransform: 'none',
                        whiteSpace: 'normal',
                      }}
                    >
                      Precio al publico
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      sm={3}
                      md={3}
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '1.5',
                        color: 'rgb(125, 135, 156)',
                        textAlign: 'left',
                        textRransform: 'none',
                        whiteSpace: 'normal',
                      }}
                    >
                      Descripcion
                    </Grid>
                    <Grid
                      item
                      xs={3}
                      sm={3}
                      md={3}
                      style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        lineHeight: '1.5',
                        color: 'rgb(125, 135, 156)',
                        textAlign: 'left',
                        textRransform: 'none',
                        whiteSpace: 'normal',
                      }}
                    >
                      Unidades
                    </Grid>
                  </Grid>
                </Grid>
                {products
                  .filter((item) => item.name.toLowerCase().includes(searchSalePointList.toLowerCase()))
                  .map((item) => (
                    <Grid
                      key={item._id}
                      container
                      className={classes.hoverComponent}
                      onClick={() =>
                        item.quantity > 0 &&
                        addToSalePointList({
                          _id: item._id,
                          title: item.name,
                          image: `${axios.defaults.baseURL}/${item.image}`,
                          quantity: 1,
                          available: item.quantity,
                          publicPrice:
                            (formatCurrencyToNum(item.unitPrice) * Number(item.revenue)) / 100 +
                            formatCurrencyToNum(item.unitPrice),
                        })
                      }
                    >
                      <Grid item xs={3} sm={3} md={3} pl={2} pr={2}>
                        <h5
                          style={{
                            fontSize: '14px',
                            fontFamily:
                              'Open Sans, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.5',
                            margin: '6px',
                            textAlign: 'left',
                            paddingTop: '10px',
                          }}
                        >{`${item.name}`}</h5>{' '}
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} pl={2} pr={2}>
                        <h5
                          style={{
                            fontSize: '14px',
                            fontFamily:
                              'Open Sans, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.5',
                            margin: '6px',
                            textAlign: 'left',
                            paddingTop: '10px',
                          }}
                        >
                          {intermediateCurrency(
                            (formatCurrencyToNum(item.unitPrice) * Number(item.revenue)) / 100 +
                              formatCurrencyToNum(item.unitPrice)
                          )}
                        </h5>
                      </Grid>
                      <Grid item xs={3} sm={3} md={3} pl={2} pr={2}>
                        <h5
                          style={{
                            fontSize: '14px',
                            fontFamily:
                              'Open Sans, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.5',
                            margin: '6px',
                            textAlign: 'left',
                            paddingTop: '10px',
                          }}
                        >
                          {item?.description?.length > 10
                            ? item?.description.slice(0, 10).concat('...')
                            : item.description}
                        </h5>
                      </Grid>

                      <Grid item xs={3} sm={3} md={3} pl={2} pr={2}>
                        <h5
                          style={{
                            fontSize: '14px',
                            fontFamily:
                              'Open Sans, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.5',
                            margin: '6px',
                            textAlign: 'left',
                            paddingTop: '10px',
                            color: item.quantity > item.quantityAlert ? 'green' : 'red',
                          }}
                        >
                          {item.quantity}
                        </h5>
                      </Grid>
                    </Grid>
                  ))}
              </>
            ) : (
              'Sin productos actualmente'
            )}
          </Grid>
        </>
      ) : (
        productGetAllData && products.length < 1 && <>'Sin Productos'</>
      )}
    </Grid>
  )
}

export default ProductGrid
