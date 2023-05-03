import { TextField, CardContent } from '@mui/material'

const ProfileInputs = ({ updateState, setUpdateState }) => {
  return (
    <CardContent>
      <TextField
        fullWidth
        label='Nombre'
        required={true}
        variant='outlined'
        style={{ marginTop: '10px' }}
        value={updateState.name}
        onChange={(e) => setUpdateState({ ...updateState, name: e.target.value })}
      />
      <TextField
        fullWidth
        label='Apellido'
        variant='outlined'
        style={{ marginTop: '10px' }}
        value={updateState.lastName}
        onChange={(e) => setUpdateState({ ...updateState, lastName: e.target.value })}
      />
      <TextField
        fullWidth
        label='Telefono'
        variant='outlined'
        style={{ marginTop: '10px' }}
        value={updateState.phone}
        onChange={(e) => setUpdateState({ ...updateState, phone: e.target.value })}
      />
      <TextField
        fullWidth
        label='Email'
        required={true}
        variant='outlined'
        style={{ marginTop: '10px' }}
        value={updateState.email}
        onChange={(e) => setUpdateState({ ...updateState, email: e.target.value })}
      />
      <TextField
        fullWidth
        label='DNI'
        variant='outlined'
        style={{ marginTop: '10px' }}
        value={updateState.dni}
        onChange={(e) => setUpdateState({ ...updateState, dni: e.target.value })}
      />
      <TextField
        fullWidth
        label='Contraseña'
        variant='outlined'
        style={{ marginTop: '10px' }}
        type='password'
        value={updateState.password}
        onChange={(e) => setUpdateState({ ...updateState, password: e.target.value })}
      />
    </CardContent>
  )
}

export default ProfileInputs
