import { TextField, Grid } from '@mui/material'

const ProducTextField = ({ setProductState, productState, update }) => {
  return (
    <>
      <Grid item xs={12} sm={12}>
        <TextField
          label='Nombre'
          required={true}
          variant='outlined'
          fullWidth
          value={productState.name}
          onChange={(e) => setProductState({ ...productState, name: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='Descripcion'
          required={true}
          variant='outlined'
          fullWidth
          value={productState.description}
          onChange={(e) => setProductState({ ...productState, description: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Alto'
          variant='outlined'
          fullWidth
          name='height'
          value={productState.height}
          onChange={(e) => setProductState({ ...productState, height: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label='Ancho'
          variant='outlined'
          fullWidth
          name='width'
          value={productState.width}
          onChange={(e) => setProductState({ ...productState, width: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label='Precio unitario'
          required={true}
          variant='outlined'
          fullWidth
          value={productState.unitPrice}
          onChange={(e) =>
            setProductState({
              ...productState,
              unitPrice: e.target.value,
              publicPrice: productState.update
                ? (Number(e.target.value) * Number(productState.revenue)) / 100 + Number(e.target.value)
                : '',
            })
          }
          name='unitPrice'
          type={'number'}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label='% Ganancia'
          disabled={!productState.unitPrice}
          required={true}
          variant='outlined'
          name='revenue'
          value={productState.revenue}
          onChange={(e) =>
            setProductState({
              ...productState,
              revenue: e.target.value,
              publicPrice:
                !e.target.value > 0
                  ? 0
                  : (Number(e.target.value) * Number(productState.unitPrice)) / 100 + Number(productState.unitPrice),
            })
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label='Precio al publico'
          required={true}
          variant='outlined'
          disabled
          name='publicPrice'
          value={productState.publicPrice}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={update ? 3 : 6}>
        <TextField
          label={update ? 'Cantidad actual' : 'Cantidad'}
          disabled={update}
          required={true}
          variant='outlined'
          name='quantity'
          value={productState.quantity}
          onChange={(e) => setProductState({ ...productState, quantity: e.target.value })}
          fullWidth
        />
      </Grid>
      {update && (
        <Grid item xs={12} sm={3}>
          <TextField
            label='Agregar cantidades'
            type='number'
            required={true}
            variant='outlined'
            name='addQuantitiy'
            value={productState.addQuantitiy}
            onChange={(e) => setProductState({ ...productState, addQuantitiy: e.target.value })}
            fullWidth
          />
        </Grid>
      )}
      <Grid item xs={12} sm={6}>
        <TextField
          label='Alerta de unidad'
          required={true}
          variant='outlined'
          name='quantityAlert'
          value={productState.quantityAlert}
          onChange={(e) => setProductState({ ...productState, quantityAlert: e.target.value })}
          fullWidth
        />
      </Grid>
    </>
  )
}

export default ProducTextField
