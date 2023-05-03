import { useSelector } from 'react-redux'
import { Button, IconButton } from '@mui/material'
import { FormControl, InputLabel, Select, Grid, MenuItem, TextField } from '@mui/material'
import CustomModal from '../../components/CustomModal/CustomModal'
import { useCallback, useEffect, useState } from 'react'

const AddStockComponent = ({ productState, setProductState, update }) => {
  const initialStockState = {
    _id: Date.now(),
    type: '',
    unitOfMeasurement: '',
    quantity: '',
    unitPrice: '',
    invoiceNumber: '',
  }

  const [stockState, setStockState] = useState(initialStockState)
  const [addStockModal, setAddStockModal] = useState(false)

  const { loadingBrandDelete, successBrandDelete } = useSelector((state) => state.brandDelete)

  const closeModalAddStock = useCallback(() => {
    return setAddStockModal(() => false)
  }, [])

  // useEffect(() => {
  //   if (update) {
  //     if (Boolean(productState.stocks.find((data) => data.type === 'Stock Inicial'))) {
  //       setStockState((prev) => ({
  //         ...prev,
  //         type: Boolean(productState.stocks.find((data) => data.type === 'Stock Inicial')) ? 'Compra' : '',
  //       }))
  //     }
  //   } else {
  //     if (Boolean(productState.stocks.map((item) => JSON.parse(item)).find((data) => data.type === 'Stock Inicial'))) {
  //       setStockState((prev) => ({
  //         ...prev,
  //         type: Boolean(
  //           productState.stocks.map((item) => JSON.parse(item)).find((data) => data.type === 'Stock Inicial')
  //         )
  //           ? 'Compra'
  //           : '',
  //       }))
  //     }
  //   }
  // }, [productState, update])

  const openModalDeleteBrand = () => {
    setAddStockModal(true)
  }
  const handlePushStock = (e) => {
    setProductState((prev) => ({ ...prev, stocks: [...prev.stocks, JSON.stringify(stockState)] }))
    setStockState(initialStockState)
    closeModalAddStock()
  }

  return (
    <CustomModal
      openButton={
        <IconButton color='secondary' onClick={openModalDeleteBrand}>
          Stock
        </IconButton>
      }
      isOpen={addStockModal}
      title={'Agregar Stock'}
      children={
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='type-id-select-label'>Tipo *</InputLabel>
              <Select
                labelId='type-id-select-label'
                id='type-id-select'
                label='Tipo'
                fullWidth
                required={true}
                value={
                  update
                    ? Boolean(productState.stocks.find((data) => data.type === 'Stock Inicial'))
                      ? 'Compra'
                      : stockState.type
                    : Boolean(
                        productState.stocks
                          .map((item) => JSON.parse(item))
                          .find((data) => data.type === 'Stock Inicial')
                      )
                    ? 'Compra'
                    : stockState.type
                }
                disabled={
                  update
                    ? Boolean(productState.stocks.find((data) => data.type === 'Stock Inicial'))
                    : Boolean(
                        productState.stocks
                          .map((item) => JSON.parse(item))
                          .find((data) => data.type === 'Stock Inicial')
                      )
                }
                onChange={(e) => setStockState({ ...stockState, type: e.target.value })}
              >
                {['Stock Inicial', 'Compra'].map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Precio unitario'
              required={true}
              variant='outlined'
              fullWidth
              value={stockState.unitPrice}
              onChange={(e) => setStockState({ ...stockState, unitPrice: e.target.value })}
              name='unitPrice'
              type={'number'}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Cantidad'
              required={true}
              variant='outlined'
              name='quantity'
              value={stockState.quantity}
              onChange={(e) => setStockState({ ...stockState, quantity: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Nro factura'
              variant='outlined'
              name='invoiceNumber'
              value={stockState.invoiceNumber}
              onChange={(e) => setStockState({ ...stockState, invoiceNumber: e.target.value })}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id='unitOfMeasurement-id-select-label'>Unidad de medida *</InputLabel>
              <Select
                labelId='unitOfMeasurement-id-select-label'
                id='unitOfMeasurement-id-select'
                label='Unidad de medida'
                fullWidth
                required={true}
                value={stockState.unitOfMeasurement}
                onChange={(e) =>
                  setStockState({
                    ...stockState,
                    unitOfMeasurement: e.target.value,
                  })
                }
              >
                {[{ name: 'Unidades' }].map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      }
      handleClose={closeModalAddStock}
      actionButtons={
        <>
          <Button variant='outlined' color='secondary' onClick={closeModalAddStock}>
            Cancelar
          </Button>
          <Button variant='contained' color='secondary' disabled={loadingBrandDelete} onClick={() => handlePushStock()}>
            {loadingBrandDelete ? 'Confirmando' : successBrandDelete ? 'Confirmado' : 'Confirmar'}
          </Button>
        </>
      }
    />
  )
}

export default AddStockComponent
