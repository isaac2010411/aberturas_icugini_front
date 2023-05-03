import { useState } from 'react'
import axios from 'axios'
import { Visibility } from '@mui/icons-material'
import { Grid, Typography, IconButton } from '@mui/material'
import CustomModal from '../CustomModal/CustomModal'
import styles from './styles/viewProductModalStyles'
import { makeStyles } from '@mui/styles'
import { formatCurrencyToNum, formatNumToCurrency } from '../../shared/helpers/commonsFunctions'

const useStyles = makeStyles(styles)

const ViewProductModal = ({ item, icon }) => {
  const classes = useStyles()
  const [viewProductModal, setViewProductModal] = useState(false)

  const closeModalViewProduct = () => {
    setViewProductModal(false)
  }

  const openModalViewProduct = () => {
    setViewProductModal(true)
  }

  return (
    <CustomModal
      openButton={
        icon ? (
          <IconButton color='info' onClick={openModalViewProduct}>
            <Visibility />
          </IconButton>
        ) : (
          <p className={classes.viewPublicName} onClick={openModalViewProduct}>
            {item.name}
          </p>
        )
      }
      isOpen={viewProductModal}
      title={'Ver Producto'}
      children={
        <Grid container>
          <Grid item xs={12} md={6}>
            <img className={classes.viewProductImage} src={`${axios.defaults.baseURL}/${item.image}`} alt={item.name} />
          </Grid>
          <Grid item xs={12} md={6} p={2} textAlign='center'>
            <Typography variant='h4'>
              <b>{item.name}</b>
            </Typography>
            <Typography variant='subtitle2'>
              Categoria <b>{item.category.name}</b>
            </Typography>
            <Typography variant='h1' className={classes.viewPublicPrice}>
              <b>
                {formatNumToCurrency(
                  (Number(item.revenue) * formatCurrencyToNum(item.unitPrice)) / 100 +
                    formatCurrencyToNum(item.unitPrice)
                )}
              </b>
            </Typography>
          </Grid>
        </Grid>
      }
      handleClose={closeModalViewProduct}
      actionButtons={
        <>
          {/* <Button variant='contained' color='secondary' onClick={closeModalViewProduct}>
            Agregar al carrito
          </Button> */}
        </>
      }
    />
  )
}

export default ViewProductModal
