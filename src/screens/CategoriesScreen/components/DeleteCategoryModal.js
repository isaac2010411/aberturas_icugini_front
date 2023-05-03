import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Box, IconButton } from '@mui/material'
import { Delete } from '@mui/icons-material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { deleteCategory } from '../../../redux/actions/categoryActions'
import { CATEGORY_DELETE_RESET } from '../../../redux/constants/categoryConstants'

const DeleteCategoryModal = ({ item }) => {
  const dispatch = useDispatch()

  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false)

  const { loadingCategoryDelete, successCategoryDelete } = useSelector((state) => state.categoryDelete)
  
  const closeModalDeleteCategory = useCallback(() => {
    return setDeleteCategoryModal(false)
  }, [])

  useEffect(() => {
    if (successCategoryDelete) {
      dispatch({ type: CATEGORY_DELETE_RESET })
      closeModalDeleteCategory()
    }
  }, [dispatch, successCategoryDelete, closeModalDeleteCategory])

  const openModalDeleteCategory = (item) => {
    setDeleteCategoryModal(true)
  }
  const handleCategoryDelete = (e) => {
    e.preventDefault()
    dispatch(deleteCategory(item._id))
  }
  return (
    <CustomModal
      openButton={
        <IconButton color='error' onClick={openModalDeleteCategory}>
          <Delete />
        </IconButton>
      }
      isOpen={deleteCategoryModal}
      title={'Eliminar Categoria'}
      children={
        <Box sx={{ width: '100%', padding: '15px' }}>
          ¿Esta completamente seguro que desea eliminar la categoria <b>{item.name}</b>? Ademas de la categoria se
          eliminaran todas las marcas y los productos vinculados a este.
        </Box>
      }
      handleClose={closeModalDeleteCategory}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModalDeleteCategory}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            disabled={loadingCategoryDelete}
            form='Eliminar Categoria'
          >
            {loadingCategoryDelete ? 'Eliminando' : successCategoryDelete ? 'Eliminado' : 'Eliminar'}
          </Button>
        </>
      }
      handleSubmit={handleCategoryDelete}
    />
  )
}

export default DeleteCategoryModal
