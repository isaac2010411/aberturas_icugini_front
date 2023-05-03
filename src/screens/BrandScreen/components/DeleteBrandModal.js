import { useDispatch, useSelector } from 'react-redux'
import { Delete } from '@mui/icons-material'
import { Button, Box, IconButton } from '@mui/material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { deleteBrand } from '../../../redux/actions/brandActions'
import { useCallback, useEffect, useState } from 'react'

import { BRAND_DELETE_RESET } from '../../../redux/constants/brandConstants'

const DeleteBrandModal = ({ item }) => {
  const dispatch = useDispatch()

  const [deleteBrandModal, setDeleteBrandModal] = useState(false)

  const { loadingBrandDelete, successBrandDelete } = useSelector((state) => state.brandDelete)

  const closeModalDeleteBrand = useCallback(() => {
    return setDeleteBrandModal(() => false)
  }, [])

  useEffect(() => {
    let timeOut
    if (successBrandDelete) {
      dispatch({ type: BRAND_DELETE_RESET })
      timeOut = setTimeout(() => {
        closeModalDeleteBrand()
      }, 1000)
    }
    return () => clearTimeout(timeOut)
  }, [dispatch, successBrandDelete, closeModalDeleteBrand])

  const openModalDeleteBrand = () => {
    setDeleteBrandModal(true)
  }
  const handleBrandDelete = (e) => {
    e.preventDefault()
    dispatch(deleteBrand(item._id))
  }

  return (
    <CustomModal
      openButton={
        <IconButton color='error' onClick={openModalDeleteBrand}>
          <Delete />
        </IconButton>
      }
      isOpen={deleteBrandModal}
      title={'Eliminar Marca'}
      children={
        <Box sx={{ width: '100%', padding: '15px' }}>
          ¿Esta completamente seguro que desea eliminar la marca <b>{item.name}</b>? Ademas de la marca se eliminaran
          todos los productos vinculados a esta
        </Box>
      }
      handleClose={closeModalDeleteBrand}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModalDeleteBrand}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            disabled={loadingBrandDelete}
            form='Eliminar Marca'
          >
            {loadingBrandDelete ? 'Eliminando' : successBrandDelete ? 'Eliminado' : 'Eliminar'}
          </Button>
        </>
      }
      handleSubmit={handleBrandDelete}
    />
  )
}

export default DeleteBrandModal
