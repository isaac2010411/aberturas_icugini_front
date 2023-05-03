import { useDispatch, useSelector } from 'react-redux'
import { TextField, Button, Box, InputLabel, MenuItem, FormControl, Select, IconButton } from '@mui/material'
import CustomModal from '../../../components/CustomModal/CustomModal'
import { Edit } from '@mui/icons-material'
import { useCallback, useEffect, useState } from 'react'
import { updateBrand } from '../../../redux/actions/brandActions'
import { BRAND_UPDATE_RESET } from '../../../redux/constants/brandConstants'

const UpdateBrandModal = ({ item }) => {
  const dispatch = useDispatch()

  const [updateBrandModal, setUpdateBrandModal] = useState(false)
  const [updateBrandState, setUpdateBrandState] = useState({
    _id: item._id,
    name: item.name,
    categoryId: item.category._id,
  })

  const closeModalUpdateBrand = useCallback(() => {
    return setUpdateBrandModal(() => false)
  }, [])

  const { loadingBrandUpdate, successBrandUpdate } = useSelector((state) => state.brandUpdate)
  const { categoryGetListData } = useSelector((state) => state.categoryGetList)

  useEffect(() => {
    let timeOut
    if (successBrandUpdate) {
      dispatch({ type: BRAND_UPDATE_RESET })
      timeOut = setTimeout(() => {
        closeModalUpdateBrand()
      }, 1000)
    }
    return () => clearTimeout(timeOut)
  }, [dispatch, successBrandUpdate, closeModalUpdateBrand])

  const openModalUpdateBrand = () => {
    setUpdateBrandModal(true)
  }

  const handleBrandUpdate = (e) => {
    e.preventDefault()
    dispatch(updateBrand(updateBrandState))
  }

  return (
    <CustomModal
      openButton={
        <IconButton color='primary' onClick={openModalUpdateBrand}>
          <Edit />
        </IconButton>
      }
      isOpen={updateBrandModal}
      title={'Editar Marca'}
      children={
        <Box sx={{ width: '100%', padding: '15px' }}>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Categoria</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={updateBrandState.categoryId}
              label='Categorias'
              fullWidth
              required={true}
              onChange={(e) => setUpdateBrandState({ ...updateBrandState, categoryId: e.target.value })}
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
            value={updateBrandState.name}
            onChange={(e) => setUpdateBrandState({ ...updateBrandState, name: e.target.value })}
          />
        </Box>
      }
      handleClose={closeModalUpdateBrand}
      actionButtons={
        <>
          <Button variant='contained' color='secondary' onClick={closeModalUpdateBrand}>
            Cancelar
          </Button>
          <Button variant='contained' color='secondary' type='submit' disabled={loadingBrandUpdate} form='Editar Marca'>
            {loadingBrandUpdate ? 'Editando' : successBrandUpdate ? 'Editado' : 'Editar'}
          </Button>
        </>
      }
      handleSubmit={handleBrandUpdate}
    />
  )
}

export default UpdateBrandModal
