import { Grid, TextField } from '@mui/material'

const AddressInputs = ({ address, setAddress }) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Nombre del Propietario'
          required={true}
          variant='outlined'
          value={address.name}
          onChange={(e) => setAddress({ ...address, name: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Codigo Postal'
          required={true}
          variant='outlined'
          value={address.cp}
          type='number'
          onChange={(e) => setAddress({ ...address, cp: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Provincia'
          required={true}
          variant='outlined'
          value={address.province}
          disabled={true}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Municipalidad'
          required={true}
          variant='outlined'
          value={address.department}
          onChange={(e) => setAddress({ ...address, department: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Localidad o Barrio'
          required={true}
          variant='outlined'
          value={address.location}
          onChange={(e) => setAddress({ ...address, location: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Calle/Avenida'
          required={true}
          variant='outlined'
          value={address.street}
          onChange={(e) => setAddress({ ...address, street: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Numero'
          required={true}
          type='number'
          variant='outlined'
          value={address.number}
          onChange={(e) => setAddress({ ...address, number: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Piso/Departamento'
          variant='outlined'
          value={address.doorOrFloor}
          onChange={(e) => setAddress({ ...address, doorOrFloor: e.target.value })}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Calle 1'
          required={true}
          variant='outlined'
          value={address.intersection1}
          onChange={(e) => setAddress({ ...address, intersection1: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label='Calle 2'
          required={true}
          variant='outlined'
          value={address.intersection2}
          onChange={(e) => setAddress({ ...address, intersection2: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Telefono de Contacto'
          required={true}
          variant='outlined'
          value={address.contactPhone}
          onChange={(e) => setAddress({ ...address, contactPhone: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label='Información Adicional'
          placeholder='Escribe aqui como se ve el domicilio por fuera para que podamos ubicarlo y hacer la entrega'
          variant='outlined'
          value={address.aditionalInfo}
          onChange={(e) => setAddress({ ...address, aditionalInfo: e.target.value })}
          multiline
          rows={4}
        />
      </Grid>
    </>
  )
}

export default AddressInputs
