import { TextField, Grid, FormGroup, FormControlLabel, Switch } from '@mui/material'

const RegisterUserForm = ({ userState, setUserState, register }) => {
  const handleIsAdmin = (e) => {
    if (userState.isSuper && !e.target.checked) {
      setUserState({ ...userState, isSuper: false, isAdmin: e.target.checked })
    } else {
      setUserState({ ...userState, isAdmin: e.target.checked })
    }
  }
  const handleIsSuper = (e) => {
    setUserState({ ...userState, isAdmin: e.target.checked, isSuper: e.target.checked })
  }
  const handleIsActive = (e) => {
    setUserState({ ...userState, isActive: e.target.checked })
  }
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' spacing={{ xs: 1 }}>
      <Grid item xs={12} md={6}>
        <TextField
          label='Nombre'
          required={true}
          fullWidth
          variant='outlined'
          value={userState.name}
          onChange={(e) => setUserState({ ...userState, name: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label='Apellido'
          required={true}
          fullWidth
          variant='outlined'
          value={userState.lastName}
          onChange={(e) => setUserState({ ...userState, lastName: e.target.value })}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='Email'
          required={true}
          fullWidth
          variant='outlined'
          value={userState.email}
          type='email'
          onChange={(e) => setUserState({ ...userState, email: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label='DNI'
          fullWidth
          variant='outlined'
          value={userState.dni}
          type='number'
          onChange={(e) => setUserState({ ...userState, dni: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label='Contraseña'
          fullWidth
          required={register}
          variant='outlined'
          value={userState.password}
          type='password'
          autoComplete='false'
          onChange={(e) => setUserState({ ...userState, password: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGroup>
          <FormControlLabel
            control={<Switch color='secondary' onChange={handleIsAdmin} checked={userState.isAdmin} />}
            label='Administrador'
          />
          {/* <FormControlLabel
            control={<Switch color='secondary' onChange={handleIsSuper} checked={userState.isSuper} />}
            label='Super Administrador'
          /> */}
        </FormGroup>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormGroup>
          <FormControlLabel
            control={<Switch color='secondary' onChange={handleIsActive} checked={userState.isActive} />}
            label='Activar'
          />
        </FormGroup>
      </Grid>
    </Grid>
  )
}

export default RegisterUserForm
