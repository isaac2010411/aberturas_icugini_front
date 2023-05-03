import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarMonth, Visibility } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'
import { Button, Box, IconButton } from '@mui/material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import viewCategoryStyles from '../styles/viewCategoryStyles'

const useStyles = makeStyles(viewCategoryStyles)

const ViewCategoryModal = ({ item }) => {
  const classes = useStyles()

  const [viewCategoryModal, setViewCategoryModal] = useState(false)

  const openModalViewCategory = () => {
    setViewCategoryModal(true)
  }
  const closeModalViewCategory = () => {
    setViewCategoryModal(false)
  }
  
  return (
    <CustomModal
      openButton={
        <IconButton color='info' onClick={openModalViewCategory}>
          <Visibility />
        </IconButton>
      }
      isOpen={viewCategoryModal}
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
      handleClose={closeModalViewCategory}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModalViewCategory}>
            Cerrar
          </Button>
        </>
      }
    />
  )
}

export default ViewCategoryModal
