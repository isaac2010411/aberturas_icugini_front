import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Add } from '@mui/icons-material'
import { TextField, Button, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { registerBrand } from '../../../redux/actions/brandActions'
import { BRAND_REGISTER_RESET } from '../../../redux/constants/brandConstants'

const RegisterBrandModal = ({ buttonValidation }) => {
  const dispatch = useDispatch()

  const brandInitialState = {
    name: '',
    categoryId: '',
  }
  const [brandModal, setBrandModal] = useState(false)
  const [brandState, setBrandState] = useState(brandInitialState)

  const { loadingBrandRegister, successBrandRegister } = useSelector((state) => state.brandRegister)
  const { categoryGetListData } = useSelector((state) => state.categoryGetList)

  const closeModal = useCallback(() => {
    return setBrandModal(false)
  }, [])

  useEffect(() => {
    if (successBrandRegister) {
      dispatch({ type: BRAND_REGISTER_RESET })
      closeModal()
      setBrandState({ name: '', categoryId: '' })
    }
  }, [dispatch, successBrandRegister, closeModal])

  const openModal = () => {
    setBrandModal(true)
  }
  const handleBrandRegister = (e) => {
    e.preventDefault()
    dispatch(registerBrand(brandState))
  }

  return (
    <CustomModal
      openButton={
        <Button
          startIcon={<Add />}
          disabled={buttonValidation}
          variant='contained'
          color='secondary'
          onClick={openModal}
        >
          Nueva Marca
        </Button>
      }
      isOpen={brandModal}
      title={'Registrar Marca'}
      children={
        <Box sx={{ width: '100%', padding: '15px' }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Categoria</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={brandState.categoryId}
              label='Categorias'
              fullWidth
              required={true}
              onChange={(e) => setBrandState({ ...brandState, categoryId: e.target.value })}
            >
              {categoryGetListData?.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label='Marca'
            style={{ marginTop: '10px' }}
            required={true}
            fullWidth
            variant='outlined'
            value={brandState.name}
            onChange={(e) => setBrandState({ ...brandState, name: e.target.value })}
          />
        </Box>
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
            disabled={loadingBrandRegister}
            form='Registrar Marca'
          >
            {loadingBrandRegister ? 'Guardando' : successBrandRegister ? 'Guardado' : 'Guardar'}
          </Button>
        </>
      }
      handleSubmit={handleBrandRegister}
    />
  )
}

export default RegisterBrandModal
