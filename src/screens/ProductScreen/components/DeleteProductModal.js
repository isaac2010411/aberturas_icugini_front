import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Box, IconButton } from '@mui/material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { Delete } from '@mui/icons-material'
import { deleteProduct } from '../../../redux/actions/productActions'
import { PRODUCT_DELETE_RESET } from '../../../redux/constants/productConstants'

const DeletProductModal = ({ item }) => {
  const dispatch = useDispatch()

  const [deleteProductModal, setDeleteProductModal] = useState(false)
  const { loadingProductDelete, successProductDelete } = useSelector((state) => state.productDelete)

  const closeModalDeleteProduct = useCallback(() => {
    return setDeleteProductModal(() => false)
  }, [])

  useEffect(() => {
    if (successProductDelete) {
      closeModalDeleteProduct()
      dispatch({ type: PRODUCT_DELETE_RESET })
    }
  }, [dispatch, successProductDelete, closeModalDeleteProduct])

  const openModalDeleteProduct = () => {
    setDeleteProductModal(true)
  }
  const handleProductDelete = (e) => {
    e.preventDefault()
    dispatch(deleteProduct(item))
  }
  return (
    <CustomModal
      openButton={
        <IconButton color='error' onClick={openModalDeleteProduct}>
          <Delete />
        </IconButton>
      }
      isOpen={deleteProductModal}
      title={'Eliminar Producto'}
      children={
        <Box sx={{ width: '100%', padding: '15px' }}>
          ¿Esta completamente seguro que desea eliminar el producto <b>{item.name}</b>, este tiene una cantidad de{' '}
          {item.quantity} <b>{item.unitOfMeasurement}</b>?
        </Box>
      }
      handleClose={closeModalDeleteProduct}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModalDeleteProduct}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            disabled={loadingProductDelete}
            form='Eliminar Producto'
          >
            {loadingProductDelete ? 'Eliminando' : successProductDelete ? 'Eliminado' : 'Eliminar'}
          </Button>
        </>
      }
      handleSubmit={handleProductDelete}
    />
  )
}

export default DeletProductModal
