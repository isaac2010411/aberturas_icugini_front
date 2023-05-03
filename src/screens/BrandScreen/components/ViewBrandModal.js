import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarMonth, Visibility } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { Button, Box, IconButton } from '@mui/material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import viewBrandStyles from '../styles/viewBrandModalStyles'

const useStyles = makeStyles(viewBrandStyles)

const ViewBrandModal = ({ item }) => {
  const classes = useStyles()

  const [viewBrandModal, setViewBrandModal] = useState(false)

  const openModalViewBrand = (item) => {
    setViewBrandModal(true)
  }
  const closeModalViewBrand = () => {
    setViewBrandModal(false)
  }

  return (
    <CustomModal
      openButton={
        <IconButton color='info' onClick={openModalViewBrand}>
          <Visibility />
        </IconButton>
      }
      isOpen={viewBrandModal}
      title={'Ver Marca'}
      children={
        <Box sx={{ width: '200px', padding: '5px' }}>
          <h2>
            <b>{item.name}</b>
          </h2>
          <>
            <div className={classes.createdContainer}>
              <CalendarMonth className={classes.createdIcon} />
              <span>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</span>
            </div>
            <p className={classes.createdText}>Creada</p>
          </>
        </Box>
      }
      handleClose={closeModalViewBrand}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModalViewBrand}>
            Cerrar
          </Button>
        </>
      }
    />
  )
}

export default ViewBrandModal
