import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button } from '@mui/material'
import { Add } from '@mui/icons-material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { registerCategory } from '../../../redux/actions/categoryActions'
import { CATEGORY_REGISTER_RESET } from '../../../redux/constants/categoryConstants'

const RegisterCategoryModal = () => {
  const dispatch = useDispatch()

  const categoryInitialState = {
    name: '',
  }
  const [categoryModal, setCategoryModal] = useState(false)
  const [categoryState, setCategoryState] = useState(categoryInitialState)

  const { loadingCategoryRegister, successCategoryRegister } = useSelector((state) => state.categoryRegister)

  const closeModal = useCallback(() => {
    return setCategoryModal(false)
  }, [])

  useEffect(() => {
    if (successCategoryRegister) {
      dispatch({ type: CATEGORY_REGISTER_RESET })
      closeModal()
      setCategoryState({ name: '' })
    }
  }, [dispatch, successCategoryRegister, closeModal])

  const openModal = () => {
    setCategoryModal(true)
  }
  const handleRegisterCategory = (e) => {
    e.preventDefault()
    dispatch(registerCategory(categoryState))
  }
  return (
    <CustomModal
      openButton={
        <Button startIcon={<Add />} variant='contained' color='secondary' onClick={openModal}>
          Nueva Categoria
        </Button>
      }
      isOpen={categoryModal}
      title={'Registrar Categoria'}
      children={
        <TextField
          label='Categoria'
          required={true}
          variant='outlined'
          value={categoryState.name}
          onChange={(e) => setCategoryState({ ...categoryState, name: e.target.value })}
        />
      }
      handleClose={closeModal}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModal}>
            Cancelar
          </Button>
          <Button
            variant='contained'
            color='secondary'
            type='submit'
            disabled={loadingCategoryRegister}
            form='Registrar Categoria'
          >
            {loadingCategoryRegister ? 'Guardando' : successCategoryRegister ? 'Guardado' : 'Guardar'}
          </Button>
        </>
      }
      handleSubmit={handleRegisterCategory}
    />
  )
}

export default RegisterCategoryModal
