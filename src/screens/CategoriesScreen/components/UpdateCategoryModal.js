import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Box, IconButton } from '@mui/material'
import { Edit } from '@mui/icons-material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { updateCategory } from '../../../redux/actions/categoryActions'
import { CATEGORY_UPDATE_RESET } from '../../../redux/constants/categoryConstants'

const UpdateCategoryModal = ({ item }) => {
  const dispatch = useDispatch()

  const [updateCategoryModal, setUpdateCategoryModal] = useState(false)
  const [updateCategoryState, setUpdateCategoryState] = useState(item)

  const { loadingCategoryUpdate, successCategoryUpdate } = useSelector((state) => state.categoryUpdate)

  const closeModalUpdateCategory = useCallback(() => {
    return setUpdateCategoryModal(false)
  }, [])

  useEffect(() => {
    if (successCategoryUpdate) {
      dispatch({ type: CATEGORY_UPDATE_RESET })
      closeModalUpdateCategory()
    }
  }, [dispatch, successCategoryUpdate, closeModalUpdateCategory])

  const openModalUpdateCategory = () => {
    setUpdateCategoryModal(true)
  }
  const handleCategoryUpdate = (e) => {
    e.preventDefault()
    dispatch(updateCategory(updateCategoryState))
  }

  return (
    <CustomModal
      openButton={
        <IconButton color='primary' onClick={openModalUpdateCategory}>
          <Edit />
        </IconButton>
      }
      isOpen={updateCategoryModal}
      title={'Editar Categoria'}
      children={
        <Box sx={{ width: '100%', padding: '15px' }}>
          <TextField
            label='Categoria'
            style={{ marginTop: '10px' }}
            required={true}
            fullWidth
            variant='outlined'
            value={updateCategoryState.name}
            onChange={(e) => setUpdateCategoryState({ ...updateCategoryState, name: e.target.value })}
          />
        </Box>
      }
      handleClose={closeModalUpdateCategory}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModalUpdateCategory}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            disabled={loadingCategoryUpdate}
            form='Editar Categoria'
          >
            {loadingCategoryUpdate ? 'Editando' : successCategoryUpdate ? 'Editado' : 'Editar'}
          </Button>
        </>
      }
      handleSubmit={handleCategoryUpdate}
    />
  )
}

export default UpdateCategoryModal
